const CORRECT_PASSWORD = "1152009"; // **** قم بتغيير كلمة المرور هذه ****

function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-message');
    const passwordScreen = document.getElementById('password-screen');
    const animationScreen = document.getElementById('animation-screen');

    if (input === CORRECT_PASSWORD) {
        // كلمة المرور صحيحة
        errorMsg.textContent = "تم بنجاح! جاري الدخول...";
        errorMsg.style.color = "#4CAF50"; // لون أخضر

        // إخفاء شاشة الباسورد بعد فترة (مثل 1.5 ثانية)
        setTimeout(() => {
            passwordScreen.classList.remove('active');
            animationScreen.classList.add('active');
        }, 1500); // 1500 مللي ثانية = 1.5 ثانية
        
    } else {
        // كلمة المرور خاطئة
        errorMsg.textContent = "كلمة المرور غير صحيحة، حاول مرة أخرى.";
        errorMsg.style.color = "#ff5252"; // لون أحمر
    }
}
