[
    '{{repeat(20)}}',
    {
        id: 'event_{{index()}}',
        name: '{{lorem(2, words)}}',
        description: '{{lorem(2, paragraphs )}}',
        event_type: 'event_{{numeric(1,4)}}',
        location_id: '{{guid}}',
        date: '{{date(01/01/2001, 01/01/2015, MM/dd/YYYY)}}'
    }
]