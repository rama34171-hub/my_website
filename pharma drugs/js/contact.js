function validateForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '') {
        alert('الرجاء إدخال الاسم');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('الرجاء إدخال بريد إلكتروني صحيح');
        return false;
    }

    if (message.length < 10) {
        alert('الرسالة يجب أن تحتوي على الأقل 10 أحرف');
        return false;
    }

    alert('تم إرسال الرسالة بنجاح!');
    return true;
}
