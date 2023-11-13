function showPoetry(poetryId) {
            const rightBox = document.getElementById('right-box');
            switch (poetryId) {
                case 'poetry1':
                    rightBox.textContent = 'Text of poetry one shows up when you click.';
                    break;
                case 'poetry2':
                    rightBox.textContent = 'Text of poetry two appears here.';
                    break;
                case 'poetry3':
                    rightBox.textContent = 'And here is the third poetry.';
                    break;
                // Add more cases for additional poetry elements
                default:
                    rightBox.textContent = ''; // Clear content if no match
            }
        }