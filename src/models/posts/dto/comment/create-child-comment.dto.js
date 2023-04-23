export class CreateChildCommentDTO {
  content;
  userId;
  parentCommentId;
  // postId는 넣지 않는다. 부모댓글이 있다는것은 부모댓글에 포스트가 정해져있어서 따로 post를 찾을필요없다.

  constructor(props) {
    this.content = props.content;
    this.userId = props.userId;
    this.parentCommentId = props.parentCommentId;
  }
}
