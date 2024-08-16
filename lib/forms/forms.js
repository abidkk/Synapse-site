document.getElementById('member-tab').addEventListener('click', function () {
    document.getElementById('member-form').classList.remove('hidden');
    document.getElementById('SignIn-form').classList.add('hidden');
    document.getElementById('member-tab').classList.add('active-tab');
    document.getElementById('volunteer-tab').classList.remove('active-tab');
});

document.getElementById('volunteer-tab').addEventListener('click', function () {
    document.getElementById('SignIn-form').classList.remove('hidden');
    document.getElementById('member-form').classList.add('hidden');
    document.getElementById('volunteer-tab').classList.add('active-tab');
    document.getElementById('member-tab').classList.remove('active-tab');
});