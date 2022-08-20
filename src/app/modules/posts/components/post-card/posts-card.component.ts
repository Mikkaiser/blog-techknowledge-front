import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import IPost from 'src/app/modules/posts/interfaces/post.interface';

@Component({
  selector: 'app-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  constructor() {}

  @Input() post!: IPost;

  public isHovering: boolean = false;

  ngOnInit(): void {}
}
