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
            this.value = event.target.value;
        });
    }

    set value(value) {
        this._value = this.validate(value)
            .normalize()
            .serialize();

        // TODO: Preserve cursor location within string of textbox when typing
        // somewhere in the middle of the string
        this.element.value = this.deserialize(this._value);
    }
    
    set readonly(value) {
        this.element.disabled = value;
    }

    validate(data) {
        const [columns, rows] = this.size;
        const validated = data
            .match(/\d?[A-F]?/gi)
            .filter(value => value.length > 0)
            .slice(0, columns * rows * this.inputChunkSize)
            .join('');

        this._value = validated;
        return this;
    }

    normalize(data = this._value) {
        this._value = data.toUpperCase();
        return this;
    }

    // Breaks down a string into an array based on this.size
    serialize(data = this._value) {
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
    deserialize(data = this._value) {
        if (Array.isArray(data)) {
            return data.map((row) => row.join(' ')).join('\n');
        } else {
            return data;
        }
    }
};

