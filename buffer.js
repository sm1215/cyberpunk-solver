class Buffer extends HexInput {
    constructor() {
        super(...arguments);
        const [columns, rows] = this.size;

        this.input = Array(columns * rows).fill('ab', 0, columns * rows).join('');
    }

    set input(value) {
        console.log('buffer value', value);
        super.input = value;
        // this.serialized = this.validate(value)
        //     .normalize()
        //     .serialize();

        // this.element.value = this.deserialized = this.deserialize();
    }


};
