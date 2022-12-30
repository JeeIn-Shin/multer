const db = require('../config/database');

const IMG = function(test)  {
    this.idx = test.idx,
    this.img_name = test.img_name,
    this.img_route = test.img_route
}

IMG.profile= (data, result) => {

    let inputImgData = Object.values(data);
    
    db.getConnection(function(err, connection) {
        
        if(!err) {
            let sql = `INSERT INTO multer_practice ( ? )`;

            connection.query(SQL, [inputImgData], (err, res) =>{
                connection.release();

                if(err) {
                    console.error("error1 ", + err);
                    result(null, err);
                    return ;
                }

                result(null, res);
                return ;
            })
        }
        else    {
            console.error("error2 " + err);
            throw err;
        }
    })
}

IMG.select = (data, result) => {
    
    db.getConnection(function(err, connection) {
        if(!err)    {
            let sql = `SELECT img_route FROM multer_practice WHERE idx LIKE ${data}`

            connection.query(sql, (err, res) => {
                connection.release();

                if(err) {
                    console.error("error 1 " + err);
                    result(null, err);
                    return ;
                }

                result(null, res)
                return ;
            })
        }
        else    {
            
        }
    })
}

module.exports = IMG;