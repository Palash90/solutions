import React from 'react';
import Home from './Home';

var componentMap = new Map();

componentMap.set('home', <Home />);


export function getComponent(component) {
    if (component.isPredefined) {
        var element = componentMap.get(component.id);
        return React.cloneElement(element, component.data);
    } else {
        var componentsArray = [];
        if (component.nestedComponents) {
            component.nestedComponents.map(
                comp => {
                    var compImpl = getComponent(comp);
                    componentsArray.push(compImpl);
                    return null;
                }
            )
        }
        return componentsArray;
    }

}