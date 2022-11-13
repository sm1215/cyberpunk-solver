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
        // how many characters each unit of information consists of
        input: {
            inputChunkSize: 3
        },
        matrix: {
            size: [2, 5],
            element: document.querySelector('#matrix')
        }
    },
    init: function() {
        ['matrix'].forEach((type) => {
            console.log('this.config[type]', this.config[type]);
            
            Object.assign(this.config[type], this.config.input);
        });
        console.log('this.config.matrix', this.config.matrix);
        
        this.matrix = new Matrix(this.config.matrix);

        document.querySelector('#reset').addEventListener('click', () => {
            this.matrix.value = '';
        });


        if (this.demo === true) {
            this.setupDemo();
        }
        if (this.debug === true) {
            this.showDebugLogs();
        }
    },
    setupDemo: function() {
        this.matrix.value = this.sample.matrix;
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
