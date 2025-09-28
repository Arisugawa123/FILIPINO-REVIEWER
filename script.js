// Main application state
class FlashcardApp {
    constructor() {
        this.currentMode = 'flashcard';
        this.currentIndex = 0;
        this.isFlipped = false;
        this.score = 0;
        this.totalAnswered = 0;
        
        // Shuffled data for each mode
        this.shuffledFlashcards = [...studyData.flashcards];
        this.shuffledMultipleChoice = [...studyData.multipleChoice];
        this.shuffledIdentification = [...studyData.identification];
        
        // Active lessons (all enabled by default)
        this.activeLessons = [1, 2, 3, 4];
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.showMode('flashcard');
        this.updateFlashcard();
    }
    
    bindEvents() {
        // Mode switching
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.target.closest('.mode-btn').dataset.mode;
                this.switchMode(mode);
            });
        });
        
        // Flashcard events
        document.getElementById('flashcard').addEventListener('click', () => {
            this.flipCard();
        });
        
        document.querySelector('.prev-btn').addEventListener('click', () => {
            this.previousCard();
        });
        
        document.querySelector('.next-btn').addEventListener('click', () => {
            this.nextCard();
        });
        
        document.querySelector('.shuffle-btn').addEventListener('click', () => {
            this.shuffleFlashcards();
        });
        
        // Multiple choice events
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectOption(e.target.closest('.option'));
            });
        });
        
        document.querySelector('.quiz-prev').addEventListener('click', () => {
            this.previousQuiz();
        });
        
        document.querySelector('.quiz-next').addEventListener('click', () => {
            this.nextQuiz();
        });
        
        document.querySelector('.quiz-restart').addEventListener('click', () => {
            this.restartQuiz();
        });
        
        // Identification events
        document.querySelector('.submit-btn').addEventListener('click', () => {
            this.submitIdentification();
        });
        
        document.querySelector('.identification-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitIdentification();
            }
        });
        
        document.querySelector('.hint-btn').addEventListener('click', () => {
            this.showHint();
        });
        
        document.querySelector('.identification-prev').addEventListener('click', () => {
            this.previousIdentification();
        });
        
        document.querySelector('.identification-next').addEventListener('click', () => {
            this.nextIdentification();
        });
        
        document.querySelector('.identification-restart').addEventListener('click', () => {
            this.restartIdentification();
        });
        
        // Modal events
        document.getElementById('lesson-filter-btn').addEventListener('click', () => {
            this.openModal();
        });
        
        document.getElementById('close-modal').addEventListener('click', () => {
            this.closeModal();
        });
        
        document.getElementById('select-all').addEventListener('click', () => {
            this.selectAllLessons();
        });
        
        document.getElementById('deselect-all').addEventListener('click', () => {
            this.deselectAllLessons();
        });
        
        document.getElementById('apply-filter').addEventListener('click', () => {
            this.applyLessonFilter();
        });
        
        document.getElementById('cancel-filter').addEventListener('click', () => {
            this.closeModal();
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('lesson-filter-modal');
            if (e.target === modal) {
                this.closeModal();
            }
        });
    }
    
    switchMode(mode) {
        this.currentMode = mode;
        this.currentIndex = 0;
        this.score = 0;
        this.totalAnswered = 0;
        
        // Update mode buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
        
        this.showMode(mode);
        
        // Initialize the selected mode
        switch(mode) {
            case 'flashcard':
                this.updateFlashcard();
                break;
            case 'multiple-choice':
                this.updateMultipleChoice();
                break;
            case 'identification':
                this.updateIdentification();
                break;
        }
    }
    
    showMode(mode) {
        document.querySelectorAll('.study-mode').forEach(modeEl => {
            modeEl.classList.remove('active');
        });
        document.getElementById(`${mode}-mode`).classList.add('active');
    }
    
    // Flashcard methods
    updateFlashcard() {
        const card = this.shuffledFlashcards[this.currentIndex];
        const flashcard = document.getElementById('flashcard');
        
        flashcard.classList.remove('flipped');
        this.isFlipped = false;
        
        // Update content
        document.querySelector('.card-front .question').textContent = card.question;
        document.querySelector('.card-back .answer').textContent = card.answer;
        
        // Update card numbers
        document.querySelectorAll('.card-number').forEach(el => {
            el.textContent = `${this.currentIndex + 1} / ${this.shuffledFlashcards.length}`;
        });
    }
    
    flipCard() {
        const flashcard = document.getElementById('flashcard');
        flashcard.classList.toggle('flipped');
        this.isFlipped = !this.isFlipped;
    }
    
    nextCard() {
        this.currentIndex = (this.currentIndex + 1) % this.shuffledFlashcards.length;
        this.updateFlashcard();
    }
    
    previousCard() {
        this.currentIndex = this.currentIndex === 0 ? 
            this.shuffledFlashcards.length - 1 : this.currentIndex - 1;
        this.updateFlashcard();
    }
    
    shuffleFlashcards() {
        this.shuffledFlashcards = shuffleArray(this.shuffledFlashcards);
        this.currentIndex = 0;
        this.updateFlashcard();
    }
    
    // Multiple choice methods
    updateMultipleChoice() {
        const question = this.shuffledMultipleChoice[this.currentIndex];
        
        document.querySelector('.quiz-question').textContent = question.question;
        
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.remove('selected', 'correct', 'incorrect');
            option.querySelector('.option-text').textContent = question.options[index];
            option.dataset.index = index;
        });
        
        document.querySelector('.quiz-feedback').innerHTML = '';
        document.querySelector('.quiz-feedback').className = 'quiz-feedback';
        
        // Update progress
        document.querySelector('.quiz-progress').textContent = 
            `Question ${this.currentIndex + 1} of ${this.shuffledMultipleChoice.length}`;
        document.querySelector('.quiz-score').textContent = 
            `Score: ${this.score}/${this.totalAnswered}`;
    }
    
    selectOption(selectedOption) {
        const options = document.querySelectorAll('.option');
        const question = this.shuffledMultipleChoice[this.currentIndex];
        const selectedIndex = parseInt(selectedOption.dataset.index);
        
        // Remove previous selections
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Mark selection
        selectedOption.classList.add('selected');
        
        // Show correct/incorrect
        const isCorrect = selectedIndex === question.correct;
        
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // Update score
        this.totalAnswered++;
        if (isCorrect) {
            this.score++;
        }
        
        // Show feedback
        const feedback = document.querySelector('.quiz-feedback');
        feedback.innerHTML = `
            <strong>${isCorrect ? 'Correct!' : 'Incorrect!'}</strong><br>
            ${question.explanation}
        `;
        feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        
        // Update score display
        document.querySelector('.quiz-score').textContent = 
            `Score: ${this.score}/${this.totalAnswered}`;
        
        // Auto advance after 3 seconds
        setTimeout(() => {
            if (this.currentIndex < this.shuffledMultipleChoice.length - 1) {
                this.nextQuiz();
            }
        }, 3000);
    }
    
    nextQuiz() {
        if (this.currentIndex < this.shuffledMultipleChoice.length - 1) {
            this.currentIndex++;
            this.updateMultipleChoice();
        }
    }
    
    previousQuiz() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateMultipleChoice();
        }
    }
    
    restartQuiz() {
        this.currentIndex = 0;
        this.score = 0;
        this.totalAnswered = 0;
        this.shuffledMultipleChoice = shuffleArray(studyData.multipleChoice);
        this.updateMultipleChoice();
    }
    
    // Identification methods
    updateIdentification() {
        const question = this.shuffledIdentification[this.currentIndex];
        
        document.querySelector('.identification-question').textContent = question.question;
        document.querySelector('.identification-input').value = '';
        document.querySelector('.identification-feedback').innerHTML = '';
        document.querySelector('.identification-feedback').className = 'identification-feedback';
        document.querySelector('.hint-text').classList.remove('show');
        document.querySelector('.hint-text').textContent = question.hint;
        
        // Update progress
        document.querySelector('.identification-progress').textContent = 
            `Question ${this.currentIndex + 1} of ${this.shuffledIdentification.length}`;
        document.querySelector('.identification-score').textContent = 
            `Score: ${this.score}/${this.totalAnswered}`;
    }
    
    submitIdentification() {
        const userAnswer = document.querySelector('.identification-input').value.trim();
        const question = this.shuffledIdentification[this.currentIndex];
        
        if (!userAnswer) {
            alert('Please enter an answer!');
            return;
        }
        
        const isCorrect = checkAnswer(userAnswer, question.answer, question.keywords);
        
        this.totalAnswered++;
        if (isCorrect) {
            this.score++;
        }
        
        // Show feedback
        const feedback = document.querySelector('.identification-feedback');
        feedback.innerHTML = `
            <strong>${isCorrect ? 'Correct!' : 'Incorrect!'}</strong><br>
            ${isCorrect ? 'Well done!' : `The correct answer is: <strong>${question.answer}</strong>`}
        `;
        feedback.className = `identification-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        
        // Update score display
        document.querySelector('.identification-score').textContent = 
            `Score: ${this.score}/${this.totalAnswered}`;
        
        // Auto advance after 3 seconds
        setTimeout(() => {
            if (this.currentIndex < this.shuffledIdentification.length - 1) {
                this.nextIdentification();
            }
        }, 3000);
    }
    
    showHint() {
        const hintText = document.querySelector('.hint-text');
        hintText.classList.toggle('show');
    }
    
    nextIdentification() {
        if (this.currentIndex < this.shuffledIdentification.length - 1) {
            this.currentIndex++;
            this.updateIdentification();
        }
    }
    
    previousIdentification() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateIdentification();
        }
    }
    
    restartIdentification() {
        this.currentIndex = 0;
        this.score = 0;
        this.totalAnswered = 0;
        this.shuffledIdentification = shuffleArray(studyData.identification);
        this.updateIdentification();
    }
    
    // Modal methods
    openModal() {
        const modal = document.getElementById('lesson-filter-modal');
        modal.style.display = 'block';
        
        // Update checkboxes to reflect current active lessons
        for (let i = 1; i <= 4; i++) {
            const checkbox = document.getElementById(`lesson-${i}`);
            checkbox.checked = this.activeLessons.includes(i);
        }
    }
    
    closeModal() {
        const modal = document.getElementById('lesson-filter-modal');
        modal.style.display = 'none';
    }
    
    selectAllLessons() {
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`lesson-${i}`).checked = true;
        }
    }
    
    deselectAllLessons() {
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`lesson-${i}`).checked = false;
        }
    }
    
    applyLessonFilter() {
        // Get selected lessons
        this.activeLessons = [];
        for (let i = 1; i <= 4; i++) {
            const checkbox = document.getElementById(`lesson-${i}`);
            if (checkbox.checked) {
                this.activeLessons.push(i);
            }
        }
        
        // Filter data based on active lessons
        this.filterDataByLessons();
        
        // Reset current indices and update displays
        this.currentIndex = 0;
        this.score = 0;
        this.totalAnswered = 0;
        
        // Update current mode display
        switch(this.currentMode) {
            case 'flashcard':
                this.updateFlashcard();
                break;
            case 'multiple-choice':
                this.updateMultipleChoice();
                break;
            case 'identification':
                this.updateIdentification();
                break;
        }
        
        this.closeModal();
    }
    
    filterDataByLessons() {
        // Filter flashcards
        this.shuffledFlashcards = studyData.flashcards.filter(item => 
            !item.lesson || this.activeLessons.includes(item.lesson)
        );
        
        // Filter multiple choice
        this.shuffledMultipleChoice = studyData.multipleChoice.filter(item => 
            !item.lesson || this.activeLessons.includes(item.lesson)
        );
        
        // Filter identification
        this.shuffledIdentification = studyData.identification.filter(item => 
            !item.lesson || this.activeLessons.includes(item.lesson)
        );
        
        // Shuffle the filtered data
        this.shuffledFlashcards = shuffleArray(this.shuffledFlashcards);
        this.shuffledMultipleChoice = shuffleArray(this.shuffledMultipleChoice);
        this.shuffledIdentification = shuffleArray(this.shuffledIdentification);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (app.currentMode === 'flashcard') {
        switch(e.key) {
            case ' ':
            case 'Enter':
                e.preventDefault();
                app.flipCard();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                app.previousCard();
                break;
            case 'ArrowRight':
                e.preventDefault();
                app.nextCard();
                break;
        }
    }
});

// Progress tracking
function updateProgress() {
    // This could be expanded to save progress to localStorage
    // For now, it's just a placeholder for future enhancements
}

// Performance analytics
function trackPerformance(mode, score, total) {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    console.log(`${mode} Performance: ${score}/${total} (${percentage}%)`);
    
    // This could be expanded to save analytics data
    // and provide detailed performance reports
}

// Initialize the application
const app = new FlashcardApp();

// Add some visual feedback effects
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation effect
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.5s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
    
    // Add hover effects to cards
    const flashcard = document.getElementById('flashcard');
    flashcard.addEventListener('mouseenter', () => {
        flashcard.style.transform = flashcard.classList.contains('flipped') 
            ? 'rotateY(180deg) scale(1.02)' 
            : 'scale(1.02)';
    });
    
    flashcard.addEventListener('mouseleave', () => {
        flashcard.style.transform = flashcard.classList.contains('flipped') 
            ? 'rotateY(180deg)' 
            : '';
    });
});

// Touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (app.currentMode === 'flashcard') {
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next card
                app.nextCard();
            } else {
                // Swipe right - previous card
                app.previousCard();
            }
        }
    }
}

// Add sound effects (optional)
function playSound(type) {
    // Placeholder for sound effects
    // Could add actual audio files later
    console.log(`Playing ${type} sound`);
}