/*
    s4 & guid - makes a unique idenifier for elements
*/
function s4( ) {
    return Math.floor( ( 1 + Math.random( ) ) * 0x10000 )
        .toString( 16 )
        .substring( 1 );
}


exports.guid = function guid( ) {
    return s4( ) + s4( ) + '-' + s4( ) + '-' + s4( ) + '-' +
        s4( ) + '-' + s4( ) + s4( ) + s4( );
};

/*
    objToStyle - compiles { key: value } to key:value;
    params
        styles { Object } - object of style declarations
    retruns
        ret { String } - compiled sting with css declarations 

    TODO - support camel case
*/

var objToStyles =
exports.objToStyles = function objToStyles( styles ) {
    var ret = '';
    for ( var prop in styles ) {
        ret += prop + ':' + styles[ prop ] + ';';
    }
    return ret;
};

/*
    objToAttribute - compiles { key: value } to key="value"
    params
        attributes { Object } - object of attribute declarations
            style objects will run through objToStyles
    returns
        ret { String } - compiled string with attribute declaration 

    TODO - support camel case
*/

exports.objToAttributes = function objToAttributes( attributes ) {
    var ret = '',
        value;
    for( var attr in attributes ) {
        value = attr === 'style' ? objToStyles( attributes[ attr ] ) : attributes[ attr ];
        ret += attr + '="' + value + '" ';
    }
    return ret;
};

/*
    mapElementsToHTML - to be use with arr.map with run toHTML of each element
    params
        elem { _elem Object } - object created by calling tag().
    returns
        html { String } - compiled elem object
*/

exports.mapElementsToHTML = function mapElementsToHTML( elem ) {
    return elem.toHTML();
};

/*
    getElementIndex - get the index of the element in an array
    params
        elem { _elem Object } - object created by calling tag().
        arr { Array } - a collections of _elem Objects
    returns
        index { Number } - the index of _elem obj in collection
*/

exports.getElementIndex = function getElementIndex( elem, arr ) {
    var index = -1;
    arr.forEach( function( _elem, _index ) {
        if ( elem.guid === _elem.guid ) {
            index = _index;
        }
    } );
    return index;
};