// تأكد من أن هذا الكود موضوع قبل وسم </body>
const CORRECT_PASSWORD = "123"; // **** لا تنسى تغيير كلمة المرور هنا ****

// إضافة خاصية الاستماع لزر Enter
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

function checkPassword() {
    const input = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-message');
    const passwordScreen = document.getElementById('password-screen');
    const animationScreen = document.getElementById('animation-screen');

    if (input === CORRECT_PASSWORD) {
        // كلمة المرور صحيحة
        errorMsg.textContent = "تم بنجاح! جاري الدخول...";
        errorMsg.style.color = "#4CAF50";

        // إخفاء شاشة الباسورد وجعل الأنميشن يظهر بعد 1.5 ثانية
        setTimeout(() => {
            passwordScreen.classList.remove('active');
            animationScreen.classList.add('active');
        }, 1500); // 1.5 ثانية انتظار
        
    } else {
        // كلمة المرور خاطئة
        errorMsg.textContent = "كلمة المرور غير صحيحة، حاول مرة أخرى.";
        errorMsg.style.color = "#ff5252";
    }
}
