import Content from '../data/openSource.json';

class OpenSourceContent{

	constructor(){
		this.get = this.get.bind(this);
	}

	get(limit = null){
		let limited_content = Content;
		if(limit != null && Content.length > limit){
			limited_content = [];
			for(let i = 0; i < limit;i++){
				limited_content.push(Content[i]);
			}
		}
		return limited_content;
	}

	getById(id){
		let item = {};
		for(let i = 0;i < Content.length;i++){
			if(Content[i].id == id) {
				return Content[i];
			}
		}
	}

}

export default OpenSourceContent;