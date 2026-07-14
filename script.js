function performDOMOperations() {

    // 1. Change Student Name
    document.getElementById("studentName").innerText = "Reddy";

    // 2. Print all Subjects
    let subjects = document.getElementsByClassName("subject");

    console.log("Subjects:");
    for (let i = 0; i < subjects.length; i++) {
        console.log(subjects[i].innerText);
    }

    // 3. Print all Paragraphs
    let paragraphs = document.getElementsByTagName("p");

    console.log("Paragraphs:");
    for (let i = 0; i < paragraphs.length; i++) {
        console.log(paragraphs[i].innerText);
    }

    // 4. Change About Paragraph
    document.querySelector("#about").innerText =
        "I love JavaScript, Python and React Development.";

    // 5. Count Subjects
    let totalSubjects = document.querySelectorAll(".subject");
    console.log("Total Subjects: " + totalSubjects.length);

    // 6. innerHTML, innerText, textContent
    let about = document.getElementById("about");

    console.log("innerHTML: " + about.innerHTML);
    console.log("innerText: " + about.innerText);
    console.log("textContent: " + about.textContent);

    // 7. Get Image Attributes
    let image = document.getElementById("studentImage");

    console.log("Image Source: " + image.getAttribute("src"));
    console.log("Alt Attribute: " + image.getAttribute("alt"));

    // 8. Change Image
    image.src = "images/student2.jpg";

    // 9. Check Alt Attribute
    console.log("Has Alt Attribute: " + image.hasAttribute("alt"));

    // 10. Remove Title Attribute
    image.removeAttribute("title");

    console.log("Title attribute removed.");
}