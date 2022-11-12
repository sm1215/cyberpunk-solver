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
        maxtrix: document.querySelector('#matrix'),
        daemon: {},
        buffer: {},
        bufferMax: 0
    },
    system: {
        maxtrix: [],
        daemon: [],
        buffer: [],
        bufferMax: 0
    },
    init: () => {
        
    }
};

(function() {
    document.onreadystatechange
    if (solver.DEV === true) {
        Object.assign(solver.system, solver.sample);
        solver.interface.matrix.value = solver.system.matrix;
        console.log(solver.system);
    }
    solver.init();
})();
