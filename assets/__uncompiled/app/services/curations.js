import Content from '../data/curations.json';

class CurationsContent{

	constructor(){
		this.get = this.get.bind(this);
	}

	get(limit = null){
		let limited_content = Content;
		if(limit != null){
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

export default CurationsContent;