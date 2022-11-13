class HexInput {
    // size: [columns, rows] represents number of columns and rows
    // mantle: a DOM element reference to a textarea element
    // readonly: whether the user can input data
    constructor({size, element, inputChunkSize, readonly = false}) {
        this.size = size;
        this.element = element;
        this.readonly = readonly;
        this.inputChunkSize = inputChunkSize;
        console.log('inputChunkSize', inputChunkSize);
        

        this.element.addEventListener('input', (event) => {
            this.value = event.target.value;
        });
    }

    set value(value) {
        if (value.trim().length === 0) {
            this._value = value;
            this.element.value = value;
            return;
        }
        this._value = this.serialize(value);
        this.element.value = this.deserialize(this._value);
    }
    
    set readonly(value) {
        this.element.disabled = value;
    }

    // Breaks down a string into an array based on this.size
    serialize(data) {
        console.log('serialize data', data);

        let serialized = data;
        if (typeof data === 'string') {
            // TODO: Constrain the amount of characters accepted as input
            const [columns, rows] = this.size;
            const cleaned = data.replace(/\s+/g, '');

            // break string down into rows based on column size
            console.log('this.inputChunkSize', this.inputChunkSize);
            
            const rowChunkPattern = new RegExp(`.{1,${columns * this.inputChunkSize}}`, 'g');
            // break all characters in a row down into the chunkSize
            const columnChunkPattern = new RegExp(`.{1,${this.inputChunkSize}}`, 'g');
            const chunks = cleaned.match(rowChunkPattern);
            console.log('chunks', chunks);
            
            serialized = chunks.map((row) => row.match(columnChunkPattern));
        }
        console.log('serialized', serialized);
        return serialized;
    }

    // Joins a 2D array into a single string with delimiting whitespace values for use in a textbox
    deserialize(data) {
        console.log('deserialize data', data);
        
        let deserialized;
        if (Array.isArray(data)) {
            deserialized = data.map((row) => row.join(' ')).join('\n');
        }
        console.log('deserialized', deserialized);
        return deserialized;
    }
};

