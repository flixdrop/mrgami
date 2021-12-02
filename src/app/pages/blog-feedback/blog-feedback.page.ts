import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blog-feedback",
  templateUrl: "./blog-feedback.page.html",
  styleUrls: ["./blog-feedback.page.scss"],
})
export class BlogFeedbackPage implements OnInit {

  expand: boolean = false;

  constructor() {}

  ngOnInit() {
    this.expand= false;
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

  onClickReadMore(){
    this.expand = !this.expand;
  }
}
