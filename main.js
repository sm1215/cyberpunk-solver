const solver = {
    demo: true,
    test: true,
    sample: {
        matrix: [
            [
                '1c',
                '55',
                'ff',
                'bd',
                'e9'
            ],
            [
                'bd',
                '1c',
                'e9',
                'ff',
                'e9'
            ],
            [
                '55',
                'bd',
                'ff',
                '1c',
                '1c'
            ],
            [
                'e9',
                'bd',
                '1c',
                '55',
                '55'
            ],
            [
                '55',
                'e9',
                'bd',
                '55',
                'ff'
            ]
        ],
        matrixDeserialized: deserialized = `1c 55 ff bd e9
bd 1c e9 ff e9
55 bd ff 1c 1c
e9 bd 1c 55 55
55 e9 bd 55 ff`,
        daemon: [
            [
                'e9',
                '55'
            ],
            [
                '55',
                'bd',
                'e9'
            ],
            [
                'ff',
                '1c',
                'bd',
                'e9'
            ],
            [
                '55',
                '1c',
                'ff',
                '55'
            ]
        ],
        bufferMax: 7
    },
    config: {
        matrix: {
            size: [5, 5],
            element: document.querySelector('#matrix')
        }
    },
    init: function() {
        this.matrix = new Matrix(this.config.matrix);
        console.log('this.matrix', this.matrix);
        
        if (this.demo === true) {
            this.setupDemo();
        }
        if (this.test === true) {
            const serializeTest = new Matrix(this.config.matrix)
                .serialize(this.sample.matrixDeserialized);

            console.log('serializeTest', serializeTest);
        }
    },
    setupDemo: function() {
        this.matrix.value = this.sample.matrix;
    }
};

(function() {
    window.onload = () => {
        solver.init();
    };
})();
