// الكلمة الصحيحة (يمكنك تغييرها هنا)
const CORRECT_PASSWORD = '1152009'; 

function checkPassword() {
    const enteredPassword = document.getElementById('passwordInput').value.trim();
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    const secretContent = document.getElementById('secret-content');

    if (enteredPassword === CORRECT_PASSWORD) {
        // 1. إخفاء شاشة الدخول
        loginScreen.style.opacity = '0';
        
        // 2. الانتظار قليلاً ثم إخفاء الشاشة وعرض المحتوى السري
        setTimeout(() => {
            loginScreen.classList.add('hidden');
            document.body.style.background = 'linear-gradient(135deg, #f9d8e7 0%, #ff69b4 100%)'; /* خلفية وردية احتفالية */

            secretContent.classList.remove('hidden');
            secretContent.style.opacity = '1';
            
            // 3. تفعيل أنيميشن القلوب الكثيفة
            startHeartParticles();

        }, 500); 
        
    } else {
        // عرض رسالة خطأ
        errorMessage.textContent = 'كلمة المرور غير صحيحة. حاول مرة أخرى.';
        // إضافة تأثير اهتزاز بسيط للخطأ
        errorMessage.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 300,
            easing: 'ease-in-out'
        });
    }
}

// دالة توليد القلوب الكثيفة
function startHeartParticles() {
    const secretContent = document.getElementById('secret-content');
    const heartEmojis = ['💖', '❤️', '✨', '💜', '💘'];
    
    // إنشاء 200 قلب صغير
    for (let i = 0; i < 200; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // اختيار إيموجي عشوائي
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        // تحديد موقع عشوائي أفقي
        heart.style.left = `${Math.random() * 100}vw`;
        
        // تحديد حجم عشوائي (صغير جداً)
        const size = Math.random() * 1 + 0.5; // بين 0.5 و 1.5
        heart.style.fontSize = `${size}em`;
        
        // تحديد مدة أنيميشن عشوائية
        heart.style.animationDuration = `${Math.random() * 8 + 5}s`; // بين 5 و 13 ثانية
        
        // تحديد تأخير أنيميشن عشوائي
        heart.style.animationDelay = `${Math.random() * 5}s`; // لتبدو عشوائية
        
        document.body.appendChild(heart);
    }
}
