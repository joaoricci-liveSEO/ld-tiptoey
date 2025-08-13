// Countdown Timer
        function updateCountdown() {
            const now = new Date();
            const blackFriday = new Date(now.getFullYear(), 10, 24); // November 24
            if (now > blackFriday) {
                blackFriday.setFullYear(blackFriday.getFullYear() + 1);
            }
            
            const diff = blackFriday - now;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('countdown').innerHTML = `
                <div class="text-center">
                    <div class="bg-black text-white text-2xl font-bold py-2 px-4 rounded">${days.toString().padStart(2, '0')}</div>
                    <div class="text-xs mt-1">DIAS</div>
                </div>
                <div class="text-center">
                    <div class="bg-black text-white text-2xl font-bold py-2 px-4 rounded">${hours.toString().padStart(2, '0')}</div>
                    <div class="text-xs mt-1">HORAS</div>
                </div>
                <div class="text-center">
                    <div class="bg-black text-white text-2xl font-bold py-2 px-4 rounded">${minutes.toString().padStart(2, '0')}</div>
                    <div class="text-xs mt-1">MIN</div>
                </div>
                <div class="text-center">
                    <div class="bg-black text-white text-2xl font-bold py-2 px-4 rounded">${seconds.toString().padStart(2, '0')}</div>
                    <div class="text-xs mt-1">SEG</div>
                </div>
            `;
        }
        
        setInterval(updateCountdown, 1000);
        updateCountdown();
        
        // Mobile Menu Toggle
        document.querySelector('.fa-bars').addEventListener('click', function() {
            const mobileMenu = document.querySelector('.md\\:hidden');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });