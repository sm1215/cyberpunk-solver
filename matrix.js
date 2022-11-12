class Matrix {
    _value = [];

    // size: [columns, rows] represents number of columns and rows
    // mantle: a DOM element reference to a textarea element
    constructor({size, element}) {
        this.size = size;
        this.element = element;
    }

    set value(data) {
        this._value = Matrix.serialize(data);
        this.element.value = Matrix.deserialize(data);
    }

    static serialize(data) {
        let serialized = data;
        if (typeof data === 'string') {
            // TODO: break into 2D array based on this.size
            throw Error('string serialization not implemented yet.');
        }
        return serialized;
    }

    static deserialize(data) {
        let deserialized = data;
        if (Array.isArray(data)) {
            data.map((column) => { console.log('column', column); return column })
        }
        return deserialized;
    }
};

