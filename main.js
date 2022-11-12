const solver = {
    DEV: true,
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
    interface: {
        matrix: document.querySelector('#matrix'),
        daemon: {},
        buffer: {},
        bufferMax: 0
    },
    system: {
        matrix: [],
        maxtrixSize: [5,5],
        daemon: [],
        buffer: [],
        bufferMax: 0
    },
    init: () => {

    },
    matrix: () => {
        const [xMax, yMax] = this.system.maxtrixSize;
        for (let x = 0; x++; x < xMax) {
            for (let y = 0; y++; y < yMax) {

            }
        }
    }
};

(function() {
    window.onload = () => {
        if (solver.DEV === true) {
            Object.assign(solver.system, solver.sample);
            solver.interface.matrix.value = solver.system.matrix
                .map((column) => column.map((row) => row.join('\n')).join(':'));
        }
        console.log(solver.system.matrix)
        solver.init();


    };
})();
