
        let currentRating = 0;
        let currentUser = null;
        let currentUserData = null;

        document.addEventListener('DOMContentLoaded', function() {
            console.log('Página carregada, verificando autenticação...');
            checkAuthentication();
            setupEventListeners();
        });

        function checkAuthentication() {
            console.log('Verificando autenticação...');
            const loggedInUser = localStorage.getItem('usuarioLogado');
            console.log('Usuário logado:', loggedInUser);

            if (!loggedInUser) {
                console.log('Usuário não está logado');
                document.getElementById('login-required').classList.remove('hidden');
                document.getElementById('authenticated-content').classList.add('hidden');
                return false;
            }

            const userData = localStorage.getItem(loggedInUser);
            console.log('Dados do usuário:', userData);

            if (!userData) {
                console.log('Dados do usuário não encontrados');
                localStorage.removeItem('usuarioLogado');
                document.getElementById('login-required').classList.remove('hidden');
                document.getElementById('authenticated-content').classList.add('hidden');
                return false;
            }

            try {
                currentUserData = JSON.parse(userData);
                currentUser = loggedInUser;
                console.log('Usuário autenticado:', currentUser, currentUserData);

                document.getElementById('login-required').classList.add('hidden');
                document.getElementById('authenticated-content').classList.remove('hidden');

                const welcomeMessage = document.getElementById('welcomeMessage');
                if (welcomeMessage) welcomeMessage.textContent = `Olá, ${currentUserData.name}`;

                const nameField = document.getElementById('name');
                const emailField = document.getElementById('email');

                if (nameField) nameField.value = currentUserData.name;
                if (emailField) emailField.value = currentUserData.email;

                return true;
            } catch (e) {
                console.error('Erro ao processar dados do usuário:', e);
                localStorage.removeItem('usuarioLogado');
                document.getElementById('login-required').classList.remove('hidden');
                document.getElementById('authenticated-content').classList.add('hidden');
                return false;
            }
        }

        function setupEventListeners() {
            const stars = document.querySelectorAll('.star');
            const ratingGroup = document.querySelector('.rating-group');

            stars.forEach(star => {
                star.addEventListener('click', function() {
                    currentRating = parseInt(this.dataset.rating);
                    document.getElementById('rating').value = currentRating;
                    updateStars();
                });

                star.addEventListener('mouseover', function() {
                    const hoverRating = parseInt(this.dataset.rating);
                    highlightStars(hoverRating);
                });
            });

            if (ratingGroup) {
                ratingGroup.addEventListener('mouseleave', function() {
                    updateStars();
                });
            }

            const feedbackForm = document.getElementById('feedbackForm');
            if (feedbackForm) {
                feedbackForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    submitFeedback();
                });
            }

            const filterCategory = document.getElementById('filterCategory');
            const sortBy = document.getElementById('sortBy');

            if (filterCategory) {
                filterCategory.addEventListener('change', loadAndDisplayPublicFeedbacks);
            }

            if (sortBy) {
                sortBy.addEventListener('change', loadAndDisplayPublicFeedbacks);
            }
        }

        function submitFeedback() {
            console.log('Enviando feedback...');

            if (!currentUser) {
                alert('Erro: Usuário não está logado.');
                window.location.href = 'login.html';
                return;
            }

            const categoryField = document.getElementById('category');
            const commentField = document.getElementById('comment');
            const sharePublic = document.getElementById('sharePublic')?.checked || false;
            const showName = document.getElementById('showName')?.checked || false;

            if (!categoryField.value || !commentField.value || currentRating === 0) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            const formData = {
                id: Date.now(),
                username: currentUser,
                name: currentUserData.name,
                email: currentUserData.email,
                category: categoryField.value,
                rating: currentRating,
                comment: commentField.value,
                date: new Date().toLocaleString('pt-BR')
            };

            console.log('Dados do feedback:', formData);

            const feedbackKey = `feedback_${currentUser}`;
            let userFeedbacks = JSON.parse(localStorage.getItem(feedbackKey)) || [];
            userFeedbacks.push(formData);
            localStorage.setItem(feedbackKey, JSON.stringify(userFeedbacks));

            let allFeedbacks = JSON.parse(localStorage.getItem('all_feedbacks')) || [];
            allFeedbacks.push(formData);
            localStorage.setItem('all_feedbacks', JSON.stringify(allFeedbacks));

            saveSharedFeedback(formData, sharePublic, showName);

            const successMessage = document.getElementById('success-message');
            if (successMessage) {
                successMessage.classList.remove('hidden');
            }

            categoryField.value = '';
            commentField.value = '';
            currentRating = 0;
            updateStars();

            if (document.getElementById('sharePublic')) document.getElementById('sharePublic').checked = false;
            if (document.getElementById('showName')) document.getElementById('showName').checked = false;

            setTimeout(() => {
                if (successMessage) {
                    successMessage.classList.add('hidden');
                }
            }, 3000);

            console.log('Feedback enviado com sucesso!');
        }

        function saveSharedFeedback(feedbackData, isPublic = false, showName = false) {
            if (!isPublic) return;

            const sharedFeedback = {
                ...feedbackData,
                user: showName ? feedbackData.name : 'Anônimo',
                isPublic: true,
                likes: 0,
                dislikes: 0
            };

            let sharedFeedbacks = JSON.parse(localStorage.getItem('sharedFeedbacks')) || [];
            sharedFeedbacks.push(sharedFeedback);
            localStorage.setItem('sharedFeedbacks', JSON.stringify(sharedFeedbacks));
        }

        function loadPublicFeedbacks(filterCategory = 'all', sortBy = 'recent') {
            let sharedFeedbacks = JSON.parse(localStorage.getItem('sharedFeedbacks')) || [];

            if (filterCategory !== 'all') {
                sharedFeedbacks = sharedFeedbacks.filter(f => f.category === filterCategory);
            }

            switch (sortBy) {
                case 'recent':
                    sharedFeedbacks.sort((a, b) => b.id - a.id);
                    break;
                case 'rating':
                    sharedFeedbacks.sort((a, b) => b.rating - a.rating);
                    break;
                case 'category':
                    sharedFeedbacks.sort((a, b) => a.category.localeCompare(b.category));
                    break;
            }

            return sharedFeedbacks;
        }

        function showPublicFeedbacks() {
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById('public-feedbacks').classList.add('active');
            
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.nav-btn')[2].classList.add('active');
            
            loadAndDisplayPublicFeedbacks();
        }

        function loadAndDisplayPublicFeedbacks() {
            const filterCategory = document.getElementById('filterCategory')?.value || 'all';
            const sortBy = document.getElementById('sortBy')?.value || 'recent';
            
            const publicFeedbacks = loadPublicFeedbacks(filterCategory, sortBy);
            const container = document.getElementById('public-feedbacks-container');

            if (publicFeedbacks.length === 0) {
                container.innerHTML = '<div class="no-feedback">Nenhum feedback público encontrado.</div>';
                return;
            }

            container.innerHTML = publicFeedbacks.map(feedback => `
                <div class="feedback-item public-feedback">
                    <div class="feedback-header">
                        <div>
                            <span class="feedback-name">${feedback.user}</span>
                            <span class="feedback-category-tag">${feedback.category}</span>
                        </div>
                        <div class="feedback-rating">
                            ${'★'.repeat(feedback.rating)}${'☆'.repeat(5 - feedback.rating)} (${feedback.rating}/5)
                        </div>
                    </div>
                    <div class="feedback-comment">${feedback.comment}</div>
                    <div class="feedback-footer">
                        <span class="feedback-date">${feedback.date}</span>
                        <div class="feedback-actions">
                            <button onclick="likeFeedback(${feedback.id})" class="like-btn">
                                👍 ${feedback.likes || 0}
                            </button>
                            <button onclick="dislikeFeedback(${feedback.id})" class="dislike-btn">
                                👎 ${feedback.dislikes || 0}
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function likeFeedback(feedbackId) {
            updateFeedbackVote(feedbackId, 'likes');
        }

        function dislikeFeedback(feedbackId) {
            updateFeedbackVote(feedbackId, 'dislikes');
        }

        function updateFeedbackVote(feedbackId, voteType) {
            let sharedFeedbacks = JSON.parse(localStorage.getItem('sharedFeedbacks')) || [];
            const feedback = sharedFeedbacks.find(f => f.id === feedbackId);
            
            if (feedback) {
                feedback[voteType] = (feedback[voteType] || 0) + 1;
                localStorage.setItem('sharedFeedbacks', JSON.stringify(sharedFeedbacks));
                loadAndDisplayPublicFeedbacks();
            }
        }

        function logout() {
            if (confirm('Tem certeza que deseja sair?')) {
                localStorage.removeItem('usuarioLogado');
                alert('Você saiu com sucesso.');
                window.location.href = 'login.html';
            }
        }

        function showForm() {
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById('feedback-form').classList.add('active');
            
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.nav-btn')[0].classList.add('active');
        }

        function showFeedbacks() {
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById('feedback-list').classList.add('active');
            
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.nav-btn')[1].classList.add('active');
            
            loadUserFeedbacks();
        }

        function updateStars() {
            document.querySelectorAll('.star').forEach((star, index) => {
                if (index < currentRating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }

        function highlightStars(rating) {
            document.querySelectorAll('.star').forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }

        function loadUserFeedbacks() {
            if (!currentUser) {
                return;
            }

            const feedbackKey = `feedback_${currentUser}`;
            const userFeedbacks = JSON.parse(localStorage.getItem(feedbackKey)) || [];
            const container = document.getElementById('feedbacks-container');

            if (userFeedbacks.length === 0) {
                container.innerHTML = '<div class="no-feedback">Você ainda não enviou nenhum feedback.</div>';
                return;
            }

            container.innerHTML = userFeedbacks.map(feedback => `
                <div class="feedback-item">
                    <div class="feedback-header">
                        <span class="feedback-name">${feedback.name}</span>
                        <span class="feedback-date">${feedback.date}</span>
                    </div>
                    <div class="feedback-rating">
                        ${'★'.repeat(feedback.rating)}${'☆'.repeat(5 - feedback.rating)} (${feedback.rating}/5)
                    </div>
                    <div><strong>Categoria:</strong> ${feedback.category}</div>
                    <div class="feedback-comment">${feedback.comment}</div>
                </div>
            `).reverse().join('');
        }

        function clearUserFeedbacks() {
            if (!currentUser) {
                return;
            }

            if (confirm('Tem certeza que deseja limpar todos os seus feedbacks? Esta ação não pode ser desfeita.')) {
                const feedbackKey = `feedback_${currentUser}`;
                localStorage.removeItem(feedbackKey);

                let allFeedbacks = JSON.parse(localStorage.getItem('all_feedbacks')) || [];
                allFeedbacks = allFeedbacks.filter(feedback => feedback.username !== currentUser);
                localStorage.setItem('all_feedbacks', JSON.stringify(allFeedbacks));

                loadUserFeedbacks();
                alert('Seus feedbacks foram removidos com sucesso.');
            }
        }
   