/**
 * Created by kee on 15/9/27.
 */
import React, { Component, PropTypes as Types } from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import styles from './styles/index.css'

class Post extends Component {
	static propTypes = {
		post:Types.object.isRequired,
		less:Types.bool
	}
	render() {
		/*if(!this.props.posts){
			return (
				<div>
					啥也木有
				</div>
			)
		}*/
		let { post } = this.props;
		let { title, content } = post;
		let id = post._id;
		let time = moment().format('lll');
		let day = moment().format('ll');
		// /post/2015年10月8日/Hello
		let go = `/post/${day}/${title}`;
		return (
			<div className={styles.posts}>
				<div className={styles.cover}>
					<Link to={go} state={{ post: post }} >
						<img src="//localhost:3000/images/test.jpg" alt="" />
					</Link>
				</div>
				<div className={styles.caption}>
					{title}
					{!this.props.less ? (
						<div>
							<p>{content}</p>
						</div>
					) : null}
				</div>
				<div className={styles.panel}>
					<span className={styles.time}>
						{time}
					</span>
					<div className={styles.actions}>
						<span className={styles.text}>1</span>
					</div>
				</div>
			</div>
		)
	}
}
export default Post