class HexInput {
    // size: [columns, rows] represents number of columns and rows
    // mantle: a DOM element reference to a textarea element
    // readonly: whether the user can input data
    constructor({size, element, inputChunkSize, readonly = false}) {
        this.size = size;
        this.element = element;
        this.readonly = readonly;
        this.inputChunkSize = inputChunkSize;

        this.element.addEventListener('input', (event) => {
            const {target, target: {value, selectionEnd}} = event;
            this.input = value;
            target.selectionEnd = selectionEnd === value.length ? this.deserialized.length : selectionEnd;
        });
    }

    set input(value) {
        this.serialized = this.validate(value)
            .normalize()
            .serialize();

        this.element.value = this.deserialized = this.deserialize();
    }
    
    set readonly(value) {
        this.element.disabled = value;
    }

    reset() {
        this.input = '';
    }

    validate(data) {
        const [columns, rows] = this.size;
        const validated = data
            .match(/\d?[A-F]?/gi)
            .filter(value => value.length > 0)
            .slice(0, columns * rows * this.inputChunkSize)
            .join('');

        this._input = validated;
        return this;
    }

    normalize(data = this._input) {
        this._input = data.toUpperCase();
        return this;
    }

    // Breaks down a string into an array based on this.size
    serialize(data = this._input) {
        if (typeof data === 'string' && data.length > 0) {
            const [columns] = this.size;

            // break string down into rows based on column size
            const rowChunkPattern = new RegExp(`.{1,${columns * this.inputChunkSize}}`, 'g');
            
            // break all characters in a row down into the chunkSize
            const columnChunkPattern = new RegExp(`.{1,${this.inputChunkSize}}`, 'g');
            
            const chunks = data.match(rowChunkPattern);
            return chunks.map((row) => row.match(columnChunkPattern));
        } else {
            return data;
        }
    }

    // Joins an array into a single string with delimiting whitespace values for use in a textbox
    deserialize(data = this.serialized) {
        if (Array.isArray(data)) {
            return data.map((row) => row.join(' ')).join('\n');
        } else {
            return data;
        }
    }
};

