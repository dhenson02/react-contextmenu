import React, { Component, PropTypes } from 'react';
import shallowEqual from 'fbjs/lib/shallowEqual';
import cx from 'classnames';
import assign from 'object-assign';

import { showMenu, hideMenu } from './actions';
import { callIfExists, cssClasses } from './helpers';

class ContextMenuTrigger extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        attributes: PropTypes.object,
        collect: PropTypes.func,
        holdToDisplay: PropTypes.number,
        renderTag: PropTypes.node
    };

    static defaultProps = {
        attributes: {},
        holdToDisplay: null,
        renderTag: 'div'
    };

    mouseDown = false;

    handleMouseDown = (event) => {
        if (event.which === 3 || event.button === 2) {
            this.mouseDown = true;
            this.handleContextClick(event);
        }
    }

    handleMouseUp = (event) => {
        if (event.which === 3 || event.button === 2) {
            this.mouseDown = false;
        }
    }

    handleContextClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const x = event.clientX;
        const y = event.clientY;

        hideMenu();

        showMenu({
            position: {x, y},
            target: this.elem,
            id: this.props.id,
            data: callIfExists(this.props.collect, this.props)
        });
    }

    elemRef = (c) => {
        this.elem = c;
    }

    shouldComponentUpdate = ( nextProps ) => {
        return !shallowEqual(nextProps, this.props);
    }

    render() {
        const { renderTag, attributes, children } = this.props;
        const newAttrs = assign({}, attributes, {
            className: cx(cssClasses.menuWrapper, attributes.className),
            onContextMenu: this.handleContextClick,
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            ref: this.elemRef
        });

        return React.createElement(renderTag, newAttrs, children);
    }
}

class TouchContextMenuTrigger extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        attributes: PropTypes.object,
        collect: PropTypes.func,
        holdToDisplay: PropTypes.number,
        renderTag: PropTypes.node
    };

    static defaultProps = {
        attributes: {},
        holdToDisplay: 1000,
        renderTag: 'div'
    };


    mouseDown = false;

    handleMouseDown = (event) => {
        if (this.props.holdToDisplay >= 0 && event.button === 0) {
            event.persist();

            this.mouseDown = true;
            setTimeout(() => {
                if (this.mouseDown) this.handleContextClick(event);
            }, this.props.holdToDisplay);
        }
    }

    handleMouseUp = (event) => {
        if (event.button === 0) {
            this.mouseDown = false;
        }
    }

    handleTouchstart = (event) => {
        if (this.props.holdToDisplay >= 0) {
            event.persist();

            this.mouseDown = true;
            setTimeout(() => {
                if (this.mouseDown) this.handleContextClick(event);
            }, this.props.holdToDisplay);
        }
    }

    handleTouchEnd = (event) => {
        event.preventDefault();
        this.mouseDown = false;
    }

    handleContextClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const x = event.clientX || (event.touches && event.touches[0].pageX);
        const y = event.clientY || (event.touches && event.touches[0].pageY);

        hideMenu();

        showMenu({
            position: {x, y},
            target: this.elem,
            id: this.props.id,
            data: callIfExists(this.props.collect, this.props)
        });
    }

    elemRef = (c) => {
        this.elem = c;
    }

    render() {
        const { renderTag, attributes, children } = this.props;
        const newAttrs = assign({}, attributes, {
            className: cx(cssClasses.menuWrapper, attributes.className),
            onContextMenu: this.handleContextClick,
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            onTouchStart: this.handleTouchstart,
            onTouchEnd: this.handleTouchEnd,
            onMouseOut: this.handleMouseUp,
            ref: this.elemRef
        });

        return React.createElement(renderTag, newAttrs, children);
    }
}

var hasTouch = false;
try {
    document.createEvent('TouchStart');
    hasTouch = true;
}
catch (e) {}

export default !hasTouch ? ContextMenuTrigger : TouchContextMenuTrigger;