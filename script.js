// الكلمة الصحيحة (يمكنك تغييرها هنا)
const CORRECT_PASSWORD = 'hanontyyy';

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
            secretContent.classList.remove('hidden');
            secretContent.style.opacity = '1';
            
            // 3. تغيير لون الخلفية ليكون أكثر بهجة عند الدخول
            document.body.style.background = 'linear-gradient(135deg, #fcf4f7 0%, #f9d8e7 100%)';

        }, 500); // 500ms للمرور بتأثير التلاشي
        
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
