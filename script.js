// Assessment functionality: registration, timer, camera, questions, results, and admin panel.
// =============================================
// QUESTION BANK - 25 QUESTIONS
// =============================================




// =============================================
// GLOBAL VARIABLES
// =============================================

let studentName = "";
let rollNumber = "";
let studentSection = "";

let currentQuestion = 0;
let answers = [];
let reviewQuestions = [];

let timeLeft = 15 * 60;
let timer = null;

let testStarted = false;
let testSubmitted = false;

let capturedPhotoData = null;
let cameraStream = null;
let testCameraStream = null;


// =============================================
// ASSESSMENT SCHEDULE
// =============================================

// Assessment opens on 10 November 2026 at 04:00 PM.
// JavaScript month is zero-based: 10 = November.

const assessmentStartTime =
    new Date(2026, 10, 16, 12, 30, 0).getTime();

// Registration window: 25 minutes.
const registrationDuration = 255 * 60 * 1000;

// Registration closing time.
const assessmentEndTime =
    assessmentStartTime + registrationDuration;


// =============================================
// UPDATE ASSESSMENT SCHEDULE
// =============================================

function updateAssessmentSchedule() {

    const now = Date.now();

    const countdown =
        document.getElementById("assessmentCountdown");

    const startButton =
        document.getElementById("startTestBtn");

    // Before scheduled opening time.
    if (now < assessmentStartTime) {

        const remaining = assessmentStartTime - now;

        const days = Math.floor(
            remaining / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (remaining % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (remaining % (1000 * 60 * 60)) / (1000 * 60)
        );

        const seconds = Math.floor(
            (remaining % (1000 * 60)) / 1000
        );

        countdown.textContent =
            "Test starts in: " +
            days + "d " +
            hours + "h " +
            minutes + "m " +
            seconds + "s";

        startButton.disabled = true;
        startButton.textContent = "Test Not Started";

    }

    // Registration is open for 15 minutes.
    else if (now < assessmentEndTime) {

        const remaining = assessmentEndTime - now;

        const minutes = Math.floor(remaining / 60000);

        const seconds = Math.floor(
            (remaining % 60000) / 1000
        );

        countdown.textContent =
            "Assessment Open! Registration closes in: " +
            minutes + "m " + seconds + "s";

        startButton.disabled = false;
        startButton.textContent = "Start Test →";

    }

    // Registration time has expired.
    else {

        countdown.textContent = "No Test Scheduled";

        startButton.disabled = true;
        startButton.textContent = "Registration Closed";

        stopStudentCamera();

        document.getElementById("photoMessage").textContent =
            "Registration time has expired.";
    }
}

updateAssessmentSchedule();

setInterval(updateAssessmentSchedule, 1000);


// =============================================
// CAMERA FUNCTIONS
// =============================================

async function openStudentCamera() {

    const video = document.getElementById("cameraVideo");

    const message = document.getElementById("photoMessage");

    if (!navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia) {

        message.textContent =
            "Camera access requires HTTPS or localhost in a supported browser.";

        return;
    }

    try {

        stopStudentCamera();

        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
            audio: false
        });

        video.srcObject = cameraStream;

        video.style.display = "block";

        document.getElementById("photoPreview").style.display = "none";

        document.getElementById("capturePhotoBtn").style.display = "inline-block";

        document.getElementById("retakePhotoBtn").style.display = "none";

        message.textContent =
            "Camera ready. Please take your photo.";

    } catch (error) {

        message.textContent =
            "Unable to access the camera. Please allow camera permission and try again.";
    }
}

function stopStudentCamera() {

    if (cameraStream) {

        cameraStream.getTracks().forEach(function(track) {
            track.stop();
        });

        cameraStream = null;
    }

    const video = document.getElementById("cameraVideo");

    if (video) {
        video.srcObject = null;
    }
}

function captureStudentPhoto() {

    const video = document.getElementById("cameraVideo");

    if (!cameraStream || !video.videoWidth) {

        document.getElementById("photoMessage").textContent =
            "Please open the camera and wait until the video appears.";

        return;
    }

    const canvas = document.getElementById("photoCanvas");

    const context = canvas.getContext("2d");

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    capturedPhotoData = canvas.toDataURL("image/jpeg", 0.9);

    const preview = document.getElementById("photoPreview");

    preview.src = capturedPhotoData;

    preview.style.display = "block";

    video.style.display = "none";

    document.getElementById("capturePhotoBtn").style.display = "none";

    document.getElementById("retakePhotoBtn").style.display = "inline-block";

    document.getElementById("photoMessage").textContent =
        "Photo captured. You can retake it or start the test.";

    stopStudentCamera();
}

document.getElementById("openCameraBtn")
    .addEventListener("click", openStudentCamera);

document.getElementById("capturePhotoBtn")
    .addEventListener("click", captureStudentPhoto);

document.getElementById("retakePhotoBtn")
    .addEventListener("click", openStudentCamera);


// =============================================
// FULLSCREEN FUNCTIONS
// =============================================

function requestFullScreen() {

    const element = document.documentElement;

    if (element.requestFullscreen) {

        element.requestFullscreen().catch(function(error) {
            console.log("Full-screen request failed:", error);
        });

    } else if (element.webkitRequestFullscreen) {

        element.webkitRequestFullscreen();

    } else if (element.msRequestFullscreen) {

        element.msRequestFullscreen();
    }
}

function checkFullScreen() {

    if (!testStarted || testSubmitted) return;

    const warning =
        document.getElementById("fullscreenWarning");

    const isFullScreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;

    warning.style.display = isFullScreen ? "none" : "flex";
}

document.addEventListener("fullscreenchange", checkFullScreen);

document.addEventListener("webkitfullscreenchange", checkFullScreen);


// =============================================
// DISABLE SOME BROWSER ACTIONS
// =============================================

["contextmenu", "copy", "cut", "paste"].forEach(function(eventName) {

    document.addEventListener(eventName, function(event) {

        if (testStarted && !testSubmitted) {
            event.preventDefault();
        }

    });

});

document.addEventListener("keydown", function(event) {

    if (!testStarted || testSubmitted) return;

    const key = event.key.toLowerCase();

    if (
        (event.ctrlKey && ["c", "v", "x", "a", "u", "p", "s"].includes(key)) ||
        (event.metaKey && ["c", "v", "x", "a", "p", "s"].includes(key)) ||
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key))
    ) {

        event.preventDefault();
        event.stopPropagation();
    }

    if (event.key === "PrintScreen") {

        event.preventDefault();

        showScreenshotWarning();

        try {

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText("").catch(function() {});
            }

        } catch (error) {}
    }

});

function showScreenshotWarning() {

    if (!testStarted || testSubmitted) return;

    document.getElementById("screenshotWarning").style.display = "flex";
}

function dismissScreenshotWarning() {

    document.getElementById("screenshotWarning").style.display = "none";
}



// =============================================
// LIVE TEST CAMERA FUNCTIONS
// Separate from the registration-photo camera.
// =============================================

async function startTestCamera() {
    const panel = document.getElementById("liveCameraPanel");
    const video = document.getElementById("liveCameraVideo");
    const status = document.getElementById("cameraLiveStatus");
    const warning = document.getElementById("cameraDisconnectWarning");

    if (!panel || !video || !status || !warning) return;

    panel.style.display = "block";
    warning.style.display = "none";
    status.textContent = "● CONNECTING";
    status.style.color = "#ffd166";

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showCameraDisconnected("Camera access requires HTTPS or localhost.");
        return;
    }

    try {
        // Do not stop a stream that is already active.
        if (testCameraStream) {
            testCameraStream.getTracks().forEach(track => track.stop());
            testCameraStream = null;
        }

        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
            audio: false
        });

        // The test may have been submitted while the permission prompt was open.
        if (!testStarted || testSubmitted) {
            stream.getTracks().forEach(track => track.stop());
            panel.style.display = "none";
            return;
        }

        testCameraStream = stream;
        video.srcObject = stream;
        await video.play();

        const videoTrack = stream.getVideoTracks()[0];
        if (!videoTrack) throw new Error("No camera video track was found.");

        videoTrack.addEventListener("ended", () => {
            if (testStarted && !testSubmitted) {
                showCameraDisconnected("Camera disconnected. Please reconnect it.");
            }
        });

        videoTrack.addEventListener("mute", () => {
            if (testStarted && !testSubmitted) {
                showCameraDisconnected("Camera feed is temporarily unavailable.");
            }
        });

        videoTrack.addEventListener("unmute", () => {
            if (testStarted && !testSubmitted) {
                status.textContent = "● LIVE";
                status.style.color = "#7CFC98";
                warning.style.display = "none";
            }
        });

        if (testStarted && !testSubmitted &&
            videoTrack.readyState === "live" && !videoTrack.muted) {
            status.textContent = "● LIVE";
            status.style.color = "#7CFC98";
            warning.style.display = "none";
        }
    } catch (error) {
        console.error("Test camera error:", error);
        if (testStarted && !testSubmitted) {
            showCameraDisconnected(
                "Camera could not start. Allow camera permission and check that no other app is using it."
            );
        }
    }
}


// Make the floating camera panel movable with mouse or touch.
// Drag the panel by its header; it remains inside the visible screen.
(function enableDraggableCameraPanel() {
    const panel = document.getElementById("liveCameraPanel");
    const handle = panel && panel.querySelector(".live-camera-header");
    if (!panel || !handle) return;

    let dragging = false;
    let startX = 0, startY = 0, startLeft = 0, startTop = 0;

    handle.setAttribute("title", "Drag to move camera preview");
    handle.setAttribute("aria-label", "Drag to move camera preview");

    handle.addEventListener("pointerdown", function (event) {
        if (event.button !== undefined && event.button !== 0) return;

        const rect = panel.getBoundingClientRect();
        dragging = true;
        startX = event.clientX;
        startY = event.clientY;
        startLeft = rect.left;
        startTop = rect.top;

        panel.style.left = rect.left + "px";
        panel.style.top = rect.top + "px";
        panel.style.right = "auto";
        panel.style.bottom = "auto";
        panel.classList.add("is-dragging");

        if (handle.setPointerCapture) {
            try { handle.setPointerCapture(event.pointerId); } catch (_) {}
        }
        event.preventDefault();
    });

    handle.addEventListener("pointermove", function (event) {
        if (!dragging) return;

        const maxLeft = Math.max(0, window.innerWidth - panel.offsetWidth);
        const maxTop = Math.max(0, window.innerHeight - panel.offsetHeight);
        const nextLeft = Math.min(maxLeft, Math.max(0, startLeft + event.clientX - startX));
        const nextTop = Math.min(maxTop, Math.max(0, startTop + event.clientY - startY));

        panel.style.left = nextLeft + "px";
        panel.style.top = nextTop + "px";
    });

    function stopDragging() {
        if (!dragging) return;
        dragging = false;
        panel.classList.remove("is-dragging");
    }

    handle.addEventListener("pointerup", stopDragging);
    handle.addEventListener("pointercancel", stopDragging);
    window.addEventListener("resize", function () {
        if (panel.style.display === "none") return;
        const rect = panel.getBoundingClientRect();
        const left = Math.min(Math.max(0, rect.left), Math.max(0, window.innerWidth - panel.offsetWidth));
        const top = Math.min(Math.max(0, rect.top), Math.max(0, window.innerHeight - panel.offsetHeight));
        panel.style.left = left + "px";
        panel.style.top = top + "px";
        panel.style.right = "auto";
        panel.style.bottom = "auto";
    });
})();

function showCameraDisconnected(message) {
    const panel = document.getElementById("liveCameraPanel");
    const status = document.getElementById("cameraLiveStatus");
    const warning = document.getElementById("cameraDisconnectWarning");

    if (!panel || !status || !warning) return;

    panel.style.display = "block";
    status.textContent = "● OFFLINE";
    status.style.color = "#ff8a80";
    warning.textContent = "⚠ " + message;
    warning.style.display = "block";
}

function stopTestCamera() {
    const video = document.getElementById("liveCameraVideo");
    const panel = document.getElementById("liveCameraPanel");

    if (testCameraStream) {
        testCameraStream.getTracks().forEach(track => track.stop());
        testCameraStream = null;
    }

    if (video) {
        video.pause();
        video.srcObject = null;
    }

    if (panel) panel.style.display = "none";
}


// =============================================
// START TEST
// =============================================

async function startTest() {

    const now = Date.now();

    // Do not allow starting before schedule.
    if (now < assessmentStartTime) {

        alert("The assessment has not started yet.");

        return;
    }

    // Do not allow starting after 15 minutes.
    if (now >= assessmentEndTime) {

        document.getElementById("assessmentCountdown").textContent =
            "No Test Scheduled";

        document.getElementById("startTestBtn").disabled = true;

        alert("No Test Scheduled. Registration time has expired.");

        return;
    }

    studentName =
        document.getElementById("studentName").value.trim();

    rollNumber =
        document.getElementById("rollNumber").value.trim();

    studentSection =
        document.getElementById("studentSection").value;

    const error =
        document.getElementById("errorMessage");

    if (!studentName || !rollNumber || !studentSection) {

        error.textContent = "Please fill all details.";

        error.style.display = "block";

        return;
    }

    if (!capturedPhotoData) {

        error.textContent =
            "Please take your photo before starting the test.";

        error.style.display = "block";

        document.getElementById("photoMessage").textContent =
            "A student photo is required before the test can start.";

        return;
    }

    error.style.display = "none";

    stopStudentCamera();

    const candidatePhoto =
        document.getElementById("candidatePhoto");

    candidatePhoto.src = capturedPhotoData;

    candidatePhoto.style.display = "inline-block";

    document.getElementById("displayName").textContent =
        studentName;

    document.getElementById("displayRoll").textContent =
        "Roll No: " + rollNumber;

    document.getElementById("displaySection").textContent =
        "Section: " + studentSection;

    // Roll number watermark.
    const watermarkText =
        document.getElementById("watermarkText");

    watermarkText.innerHTML = "";

    for (let i = 0; i < 50; i++) {

        const span = document.createElement("span");

        span.textContent = rollNumber;

        watermarkText.appendChild(span);
    }

    document.getElementById("rollWatermark").style.display = "block";

    currentQuestion = 0;

    answers = new Array(questions.length).fill(null);

    reviewQuestions = new Array(questions.length).fill(false);

    // Test duration: 15 minutes.
    timeLeft = 15 * 60;

    testStarted = true;

    testSubmitted = false;

    document.body.classList.add("test-active");

    document.getElementById("totalQuestions").textContent =
        questions.length;

    createPalette();

    document.getElementById("registrationPage").style.display = "none";

    document.getElementById("testPage").style.display = "block";

    showQuestion();

    startTimer();

    requestFullScreen();

    // Keep the camera preview active throughout the test.
    await startTestCamera();
}


// =============================================
// QUESTION PALETTE
// =============================================

function createPalette() {

    const palette = document.getElementById("palette");

    palette.innerHTML = "";

    questions.forEach(function(_, index) {

        const button = document.createElement("button");

        button.textContent = index + 1;

        button.onclick = function() {

            currentQuestion = index;

            showQuestion();
        };

        palette.appendChild(button);
    });
}


// =============================================
// DISPLAY QUESTION
// =============================================

function showQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;

    document.getElementById("qNo").textContent =
        currentQuestion + 1;

    document.getElementById("question").textContent =
        q.question;

    const options = document.getElementById("options");

    options.innerHTML = "";

    q.options.forEach(function(option, index) {

        const label = document.createElement("label");

        label.className = "option";

        const radio = document.createElement("input");

        radio.type = "radio";

        radio.name = "answer";

        radio.checked = answers[currentQuestion] === index;

        const text = document.createTextNode(option);

        label.appendChild(radio);

        label.appendChild(text);

        if (radio.checked) {
            label.classList.add("selected");
        }

        label.onclick = function() {

            answers[currentQuestion] = index;

            showQuestion();
        };

        options.appendChild(label);
    });

    updatePalette();
}


// =============================================
// UPDATE QUESTION PALETTE
// =============================================

function updatePalette() {

    document.querySelectorAll(".palette button")
        .forEach(function(button, index) {

        button.className = "";

        if (answers[index] !== null) {
            button.classList.add("answered");
        }

        if (reviewQuestions[index]) {
            button.classList.add("review");
        }

        if (index === currentQuestion) {
            button.classList.add("current");
        }

    });
}


// =============================================
// QUESTION NAVIGATION
// =============================================

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();
    }
}

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();
    }
}

function markReview() {

    reviewQuestions[currentQuestion] =
        !reviewQuestions[currentQuestion];

    updatePalette();
}

function clearAnswer() {

    answers[currentQuestion] = null;

    showQuestion();
}


// =============================================
// TEST TIMER
// =============================================

function startTimer() {

    clearInterval(timer);

    timer = setInterval(function() {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timer);

            alert("Time is over. Your test will be submitted automatically.");

            submitTest(true);
        }

    }, 1000);

    updateTimer();
}

function updateTimer() {

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}


// =============================================
// SUBMIT TEST
// =============================================

function submitTest(automatic = false) {

    if (testSubmitted) return;

    if (!automatic &&
        !confirm("Are you sure you want to submit the test?")) {

        return;
    }

    testSubmitted = true;

    testStarted = false;

    // Immediately release the camera when the test is submitted.
    stopTestCamera();

    clearInterval(timer);

    document.getElementById("fullscreenWarning").style.display = "none";

    document.getElementById("screenshotWarning").style.display = "none";

    document.body.classList.remove("test-active");

    document.getElementById("rollWatermark").style.display = "none";

    let correct = 0;

    let wrong = 0;

    let attempted = 0;

    let notAttempted = 0;

    const answerDetails = questions.map(function(question, index) {

        const selected = answers[index];

        let status;

        if (selected === null) {

            notAttempted++;

            status = "Not Attempted";

        } else {

            attempted++;

            if (selected === question.answer) {

                correct++;

                status = "Correct";

            } else {

                wrong++;

                status = "Wrong";
            }
        }

        return {
            question: question.question,
            options: question.options,
            selectedIndex: selected,
            selectedAnswer: selected === null ?
                "Not Attempted" : question.options[selected],
            correctIndex: question.answer,
            correctAnswer: question.options[question.answer],
            status: status
        };
    });

    const resultRecord = {

        id: String(Date.now()) + "-" + rollNumber,

        name: studentName,

        rollNumber: rollNumber,

        section: studentSection,

        photo: capturedPhotoData,

        total: questions.length,

        attempted: attempted,

        correct: correct,

        wrong: wrong,

        notAttempted: notAttempted,

        percentage: Number(
            ((correct / questions.length) * 100).toFixed(2)
        ),

        submittedAt: new Date().toLocaleString(),

        answers: answerDetails
    };

    try {

        const savedResults = JSON.parse(
            localStorage.getItem("onlineAssessmentResults") || "[]"
        );

        savedResults.push(resultRecord);

        localStorage.setItem(
            "onlineAssessmentResults",
            JSON.stringify(savedResults)
        );

    } catch (error) {

        alert(
            "The result could not be saved in this browser. Storage may be full. Please contact the administrator."
        );

        testSubmitted = false;

        testStarted = true;

        // Restore camera if submission could not be saved.
        startTestCamera();

        return;
    }

    document.getElementById("testPage").style.display = "none";

    document.getElementById("registrationPage").style.display = "none";

    document.getElementById("submissionMessage").style.display = "flex";

    if (document.fullscreenElement && document.exitFullscreen) {

        document.exitFullscreen().catch(function() {});
    }

    window.scrollTo(0, 0);
}


// =============================================
// ADMIN LOGIN PAGE
// =============================================

function showAdminLogin() {

    stopStudentCamera();

    document.getElementById("registrationPage").style.display = "none";

    document.getElementById("testPage").style.display = "none";

    document.getElementById("submissionMessage").style.display = "none";

    document.getElementById("adminDashboard").style.display = "none";

    document.getElementById("adminLoginPage").style.display = "flex";

    document.getElementById("adminLoginError").style.display = "none";
}

function backToRegistration() {

    document.getElementById("adminLoginPage").style.display = "none";

    document.getElementById("registrationPage").style.display = "flex";

    updateAssessmentSchedule();
}


// =============================================
// ADMIN LOGIN AUTHENTICATION
// =============================================

async function adminLogin() {

    const username =
        document.getElementById("adminUsername").value.trim();

    const password =
        document.getElementById("adminPassword").value;

    const error =
        document.getElementById("adminLoginError");

    const storedPasswordHash =
        "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5";

    try {

        const msgBuffer = new TextEncoder().encode(password);

        const hashBuffer =
            await crypto.subtle.digest("SHA-256", msgBuffer);

        const hashArray =
            Array.from(new Uint8Array(hashBuffer));

        const computedHash =
            hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

        if (username === "admin" &&
            computedHash === storedPasswordHash) {

            document.getElementById("adminLoginPage").style.display = "none";

            document.getElementById("adminDashboard").style.display = "flex";

            document.getElementById("adminPassword").value = "";

            renderAdminResults();

        } else {

            error.textContent = "Incorrect username or password.";

            error.style.display = "block";
        }

    } catch (err) {

        error.textContent =
            "Admin login requires a supported secure browser context.";

        error.style.display = "block";
    }
}


// =============================================
// ADMIN LOGOUT
// =============================================

function adminLogout() {

    document.getElementById("adminDashboard").style.display = "none";

    document.getElementById("adminLoginPage").style.display = "flex";

    document.getElementById("adminUsername").value = "";

    document.getElementById("adminPassword").value = "";
}


// =============================================
// DISPLAY ADMIN RESULTS
// =============================================

function renderAdminResults() {

    const container =
        document.getElementById("adminResults");

    let results = [];

    try {

        results = JSON.parse(
            localStorage.getItem("onlineAssessmentResults") || "[]"
        );

    } catch (error) {

        results = [];
    }

    container.innerHTML = "";

    if (!results.length) {

        container.textContent =
            "No assessment results have been saved in this browser yet.";

        return;
    }

    const wrapper = document.createElement("div");

    wrapper.className = "admin-table-wrap";

    const table = document.createElement("table");

    table.className = "admin-table";

    const thead = document.createElement("thead");

    thead.innerHTML =
        "<tr>" +
        "<th>Photo</th>" +
        "<th>Name</th>" +
        "<th>Roll Number</th>" +
        "<th>Section</th>" +
        "<th>Score</th>" +
        "<th>Correct</th>" +
        "<th>Wrong</th>" +
        "<th>Submitted</th>" +
        "<th>Details</th>" +
        "</tr>";

    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    results.slice().reverse().forEach(function(result) {

        const tr = document.createElement("tr");

        const photoCell = document.createElement("td");

        if (result.photo) {

            const img = document.createElement("img");

            img.src = result.photo;

            img.alt = "Student photo";

            img.className = "admin-photo";

            photoCell.appendChild(img);

        } else {

            photoCell.textContent = "No photo";
        }

        const values = [

            result.name,
            result.rollNumber,
            result.section,
            result.correct + " / " + result.total,
            result.correct,
            result.wrong,
            result.submittedAt

        ];

        tr.appendChild(photoCell);

        values.forEach(function(value) {

            const td = document.createElement("td");

            td.textContent = value == null ? "" : String(value);

            tr.appendChild(td);
        });

        const actionCell = document.createElement("td");

        const detailsButton = document.createElement("button");

        detailsButton.className = "details-btn";

        detailsButton.textContent = "View Answers";

        detailsButton.onclick = function() {

            showResultDetails(result.id);
        };

        actionCell.appendChild(detailsButton);

        tr.appendChild(actionCell);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    wrapper.appendChild(table);

    container.appendChild(wrapper);

    const detailsContainer = document.createElement("div");

    detailsContainer.id = "resultDetailsContainer";

    container.appendChild(detailsContainer);
}


// =============================================
// VIEW STUDENT ANSWER DETAILS
// =============================================

function showResultDetails(resultId) {

    const results = JSON.parse(
        localStorage.getItem("onlineAssessmentResults") || "[]"
    );

    const result = results.find(function(item) {
        return item.id === resultId;
    });

    if (!result) return;

    const container =
        document.getElementById("resultDetailsContainer");

    container.innerHTML = "";

    const section = document.createElement("section");

    section.className = "result-details";

    const heading = document.createElement("h2");

    heading.textContent =
        "Answer Details — " + result.name +
        " (" + result.rollNumber + ")";

    section.appendChild(heading);

    const summary = document.createElement("p");

    summary.textContent =
        "Score: " + result.correct + "/" + result.total +
        " | Correct: " + result.correct +
        " | Wrong: " + result.wrong +
        " | Not attempted: " + result.notAttempted +
        " | Percentage: " + result.percentage + "%";

    section.appendChild(summary);

    (result.answers || []).forEach(function(answer, index) {

        const card = document.createElement("div");

        card.className =
            "admin-answer " +
            (answer.status === "Correct" ? "correct" :
            answer.status === "Wrong" ? "wrong" : "unanswered");

        const question = document.createElement("h3");

        question.textContent =
            "Q" + (index + 1) + ". " + answer.question;

        const chosen = document.createElement("p");

        chosen.textContent =
            "Student answer: " + answer.selectedAnswer;

        const correctAnswer = document.createElement("p");

        correctAnswer.textContent =
            "Correct answer: " + answer.correctAnswer;

        const status = document.createElement("strong");

        status.textContent = answer.status;

        card.append(question, chosen, correctAnswer, status);

        section.appendChild(card);
    });

    container.appendChild(section);

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =============================================
// EXPORT RESULTS TO CSV
// =============================================

function exportResultsCSV() {

    const results = JSON.parse(
        localStorage.getItem("onlineAssessmentResults") || "[]"
    );

    if (!results.length) {

        alert("There are no results to export.");

        return;
    }

    function csvCell(value) {

        return '"' +
            String(value == null ? "" : value)
            .replace(/"/g, '""') +
            '"';
    }

    const rows = [

        [
            "Name",
            "Roll Number",
            "Section",
            "Score",
            "Total",
            "Correct",
            "Wrong",
            "Not Attempted",
            "Percentage",
            "Submitted At",
            "Photo Data"
        ]

    ];

    results.forEach(function(result) {

        rows.push([

            result.name,
            result.rollNumber,
            result.section,
            result.correct,
            result.total,
            result.correct,
            result.wrong,
            result.notAttempted,
            result.percentage,
            result.submittedAt,
            result.photo || ""

        ]);
    });

    const csv = rows.map(function(row) {

        return row.map(csvCell).join(",");

    }).join("\r\n");

    const blob = new Blob(
        [csv],
        { type: "text/csv;charset=utf-8;" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "assessment-results.csv";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);
}


// =============================================
// DELETE ALL RESULTS
// =============================================

function clearAllResults() {

    const confirmed = confirm(
        "Delete ALL saved assessment results from this browser? This cannot be undone."
    );

    if (!confirmed) return;

    localStorage.removeItem("onlineAssessmentResults");

    renderAdminResults();
}
