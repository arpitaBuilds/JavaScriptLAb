window.onload = function() {
	let savedTheme = localStorage.getItem('theme');

	if (savedTheme) {
		setTheme(savedTheme);
	}
};

function setTheme(theme) {
	if (theme === 'dark') {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}

	localStorage.setItem('theme', theme);
	document.getElementById('message').textContent = theme + ' theme saved.';
}

function clearTheme() {
	localStorage.removeItem('theme');
	document.body.classList.remove('dark');
	document.getElementById('message').textContent = 'Theme preference cleared.';
}

