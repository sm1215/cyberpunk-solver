class HexInput {
    // size: [columns, rows] represents number of columns and rows
    // mantle: a DOM element reference to a textarea element
    // readonly: whether the user can input data
    constructor({size, element, readonly = false}) {
        this.size = size;
        this.element = element;
        this.readonly = readonly;
    }

    set value(data) {
        this._value = this.serialize(data);
        this.element.value = this.deserialize(data);
    }

    set readonly(value) {
        this.element.disabled = value;
    }

    // Breaks down a string into an array based on this.size
    serialize(data) {
        let serialized = data;
        if (typeof data === 'string') {
            const [columns, rows] = this.size;
            const cleaned = data.replace(/\s+/g, '');
            const serialized = [];
            for (let y = 0; y++; y <= rows) {
                serialized.push(cleaned.slice(y, columns));
            }

        }
        return serialized ? serialized : data;
    }

    // Joins a 2D array into a single string with delimiting whitespace values for use in a textbox
    deserialize(data) {
        if (Array.isArray(data)) {
            const deserialized = data.map((row) => row.join(' ')).join('\n');
        }
        return deserialized ? deserialized : data;
    }
};

