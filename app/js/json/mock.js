[
    '{{repeat(20)}}',
    {
        id: '{{guid()}}',
        active: '{{bool()}}',
        name: '{{lorem(2, "words")}}',
        case_id: '{{guid()}}',
        defendant: '{{guid()}}',
        case_type: 'test{{numeric(1,2)}}',
        description: '{{lorem(2)}}',
        created: '{{date()}}',
        court_location: '{{guid()}}',
        police_dept: '{{guid()}}',
        da_office: '{{guid()}}',
        rate: '{{numeric(50, 100)}}',
        arraign_date: '{{date()}}',
        docket_number: '{{guid()}}',
        reporting_officer: '{{guid()}}',
        attorney: '{{guid()}}',
        asst_dist_atty: '{{guid()}}',
        probation_officer: '{{guid()}}',
        nac_number: '{{guid()}}',
        events:
            [
                '{{repeat(2,10)}}',
                {
                    event_id: 'event_{{numeric(1,4)}}',
                    name: '{{lorem(2, "words")}}',
                    description: '{{lorem(2, "sentences")}}',
                    event_type: 'event_{{numeric(1,4)}}',
                    location_id: '{{guid()}}',
                    date: '{{date()}}'
                }
            ],
        people: {
            witness: [
                '{{repeat(5, 8)}}', {
                    id: '{{guid()}}',
                    firstname: '{{firstName()}}',
                    lastname: '{{surname()}}',
                    phone: '{{phone()}}',
                    email: '{{email()}}',
                    description: '{{lorem(1)}}'
                }
            ],
            victom: [
                '{{repeat(5, 8)}}', {
                    id: '{{guid()}}',
                    firstname: '{{firstName(male)}}',
                    lastname: '{{surname()}}',
                    phone: '{{phone()}}',
                    email: '{{email()}}',
                    description: '{{lorem(1)}}'
                }
            ]
        }
    }
]