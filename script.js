document.addEventListener('DOMContentLoaded', function() {
    const subjects = ['Korean', 'Math', 'English', 'Exploration 1', 'Exploration 2'];
    const scoreTypes = ['percentile', 'standard score', 'grade'];
    const scoreInputsContainer = document.getElementById('scoreInputs');

    subjects.forEach(subject => {
        const div = document.createElement('div');
        div.className = 'flex flex-col';
        const label = document.createElement('label');
        label.className = 'font-bold mb-2';
        label.textContent = subject;
        div.appendChild(label);

        scoreTypes.forEach(type => {
            if (subject !== 'English' || type === 'grade') {
                const input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('name', `${subject.toLowerCase().replace(/\s/g, '')}_${type}`);
                input.setAttribute('placeholder', `${type.charAt(0).toUpperCase() + type.slice(1)}`);
                input.className = 'border rounded-lg p-2 mb-2';
                div.appendChild(input);
            }
        });

        scoreInputsContainer.appendChild(div);
    });

    document.getElementById('submit').addEventListener('click', function() {
        // Placeholder for calculation and result display logic
        console.log('Calculate and display university acceptance rates.');
    });
});
