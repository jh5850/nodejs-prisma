export class UpdatePostDTO {
  title;
  content;
  tags; //["thread", "javascript"]

  constructor(props) {
    this.title = props.title;
    this.content = props.content;
    this.tags = props.tags;
  }
}
