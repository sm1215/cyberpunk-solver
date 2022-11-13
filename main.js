const solver = {
    demo: false,
    debug: false,
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
        input: {
            types: ['matrix', 'daemon', 'buffer'],
            // how many characters each unit of information consists of
            inputChunkSize: 2
        },
        matrix: {
            size: [5, 5],
            element: document.querySelector('#matrix')
        },
        buffer: {
            size: [1, 7],
            element: document.querySelector('#buffer'),
            readonly: true
        },
        daemon: {}
    },
    init: function() {
        // assign global input config to each type of input
        this.config.input.types.forEach((type) => {
            Object.assign(this.config[type], this.config.input);
        });
        
        this.matrix = new Matrix(this.config.matrix);
        this.buffer = new Buffer(this.config.buffer);

        this.setupListeners();

        if (this.demo === true) {
            this.setupDemo();
        }
        if (this.debug === true) {
            this.showDebugLogs();
        }
    },
    setupListeners: function() {
        document.querySelector('#reset').addEventListener('click', () => {
            this.matrix.reset();
        });


    },
    setupDemo: function() {
        this.matrix.input = this.sample.matrix;
    },
    showDebugLogs: function() {
        const serializeTest = new Matrix(this.config.matrix)
            .serialize(this.sample.matrixDeserialized);
        console.log('serializeTest', serializeTest);
    }
};

(function() {
    window.onload = () => {
        solver.init();
    };
})();
