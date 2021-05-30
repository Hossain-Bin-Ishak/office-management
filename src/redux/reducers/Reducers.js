

const initialState = {
    employeeDetails: [
        {
            name: 'Milon Khan',
            attendance : 'Present'
        },
        {
            name: 'Pintu Khan',
            attendance : 'Absent'
        },
        {
            name: 'Mohan Khan',
            attendance : 'Present'
        },
        {
            name: 'Jobbar Khan',
            attendance : 'Present'
        },
        {
            name: 'Dalower Khan',
            attendance : 'Present'
        },
    ]
}

export const Reducers = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

