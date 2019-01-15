import React from 'react';
import Home from './Home';
import TableComponent from './TableComponet';
import SVGComponent from './SVGComponent';

var componentMap = new Map();

componentMap.set('home', <Home />);
componentMap.set('table', <TableComponent />);
componentMap.set('svg', <SVGComponent />);

/*
    This function returns the component when provided with a component object.
    The parameter of this function has the following structure -
    {
        name: String,
        isPredefined: boolean, // Detrmines if the component is a predefined component of the application or not.
        nestedComponents: [
            {
                id: String, // The id of the predefined component,this is necessary for a predefined component.
                isPredefined: true, // This value is true for predefined components.
                data: {
                    // Data object required for the Predefined Component.
                }
            }
        ]
    }
*/
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