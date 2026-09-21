// Show the saved schedule and the current session count when the page loads.
window.addEventListener("load", function() {
	showLastSchedule();
	showSessionCount();
	showRecentViews();
});

const scheduleCells = document.querySelectorAll(".clickable");
const clearHistoryButton = document.querySelector("#clear-history");
const changeTopicButton = document.querySelector("#change-topic");
const topicInput = document.querySelector("#topic-input");

// Add the same click behavior to every schedule cell.
scheduleCells.forEach(function(cell) {
	cell.addEventListener("click", function() {
		const schedule = {
			day: cell.dataset.day,
			topic: cell.dataset.topic,
			begin: cell.dataset.begin,
			end: cell.dataset.end
		};

		// Keep the topic only for this tab, and save the other details permanently.
		const savedDetails = {
			day: schedule.day,
			begin: schedule.begin,
			end: schedule.end
		};
		localStorage.setItem("lastSchedule", JSON.stringify(savedDetails));
		sessionStorage.setItem("selectedTopic", schedule.topic);

		let viewedCount = sessionStorage.getItem("viewedCount");
		if (viewedCount === null) {
			viewedCount = 0;
		}
		viewedCount = Number(viewedCount) + 1;
		sessionStorage.setItem("viewedCount", viewedCount);
		addRecentView(schedule);

		showLastSchedule();
		showSessionCount();
		showRecentViews();

		alert("Day: " + schedule.day + "\nTopic: " + schedule.topic + "\nTime: " + schedule.begin + " - " + schedule.end);
	});
});

clearHistoryButton.addEventListener("click", function() {
	localStorage.removeItem("lastSchedule");
	sessionStorage.removeItem("selectedTopic");
	sessionStorage.removeItem("viewedCount");
	sessionStorage.removeItem("recentViews");
	restoreTableTopics();

	showLastSchedule();
	showSessionCount();
	showRecentViews();
	alert("History cleared!");
});

// Update only the topic in sessionStorage for the selected schedule.
changeTopicButton.addEventListener("click", function() {
	const newTopic = topicInput.value.trim();
	const savedSchedule = localStorage.getItem("lastSchedule");

	if (savedSchedule === null) {
		alert("Please select a schedule first.");
		return;
	}

	if (newTopic === "") {
		alert("Please enter a topic.");
		return;
	}

	sessionStorage.setItem("selectedTopic", newTopic);
	addRecentView({ topic: newTopic });
	showLastSchedule();
	showRecentViews();
	alert("Topic changed to: " + newTopic);
});

// Read the saved object from localStorage and show it below the table.
function showLastSchedule() {
	const lastScheduleText = document.querySelector("#last-schedule");
	const savedSchedule = localStorage.getItem("lastSchedule");
	const savedTopic = sessionStorage.getItem("selectedTopic");

	if (savedSchedule === null || savedTopic === null) {
		lastScheduleText.textContent = "No schedule selected yet.";
		topicInput.value = "";
		clearSelectedSchedule();
		return;
	}

	const schedule = JSON.parse(savedSchedule);
	schedule.topic = savedTopic;
	updateTableTopic(schedule);
	topicInput.value = savedTopic;
	lastScheduleText.textContent = "Day: " + schedule.day + " | Topic: " + schedule.topic + " | Time: " + schedule.begin + " - " + schedule.end;
	markSelectedSchedule(schedule);
}

// Read the session click count and update the counter text.
function showSessionCount() {
	const sessionCountText = document.querySelector("#session-count");
	let viewedCount = sessionStorage.getItem("viewedCount");

	if (viewedCount === null) {
		viewedCount = 0;
	}

	sessionCountText.textContent = "Schedules Viewed This Session: " + viewedCount;
}

// Keep the last three topics in this tab only.
function addRecentView(schedule) {
	let recentViews = sessionStorage.getItem("recentViews");
	if (recentViews === null) {
		recentViews = [];
	} else {
		recentViews = JSON.parse(recentViews);
	}

	recentViews.unshift(schedule.topic);
	recentViews = recentViews.slice(0, 3);
	sessionStorage.setItem("recentViews", JSON.stringify(recentViews));
}

function showRecentViews() {
	const recentViewsText = document.querySelector("#recent-views");
	const savedViews = sessionStorage.getItem("recentViews");

	if (savedViews === null) {
		recentViewsText.textContent = "Recent Views: None";
		return;
	}

	const recentViews = JSON.parse(savedViews);
	recentViewsText.textContent = "Recent Views: " + recentViews.join(", ");
}

function markSelectedSchedule(schedule) {
	scheduleCells.forEach(function(cell) {
		cell.classList.remove("selected-cell");
		if (cell.dataset.topic === schedule.topic && cell.dataset.begin === schedule.begin && cell.dataset.end === schedule.end) {
			cell.classList.add("selected-cell");
		}
	});
}

// Change the topic text in the matching table row.
function updateTableTopic(schedule) {
	scheduleCells.forEach(function(cell) {
		if (cell.dataset.day === schedule.day && cell.dataset.begin === schedule.begin && cell.dataset.end === schedule.end) {
			if (cell.dataset.originalTopic === undefined) {
				cell.dataset.originalTopic = cell.dataset.topic;
			}
			cell.dataset.topic = schedule.topic;

			if (cell.classList.contains("topic-cell")) {
				cell.textContent = schedule.topic;
			}
		}
	});
}

function restoreTableTopics() {
	scheduleCells.forEach(function(cell) {
		if (cell.dataset.originalTopic !== undefined) {
			cell.dataset.topic = cell.dataset.originalTopic;
			if (cell.classList.contains("topic-cell")) {
				cell.textContent = cell.dataset.originalTopic;
			}
		}
	});
}

function clearSelectedSchedule() {
	scheduleCells.forEach(function(cell) {
		cell.classList.remove("selected-cell");
	});
}
