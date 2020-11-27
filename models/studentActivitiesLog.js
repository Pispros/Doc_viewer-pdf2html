const connection = require('../config/confidDB');

class StudentActivitiesLog {
    static insert(date_connexion, id_student, id_contenu, duree='00:00:00') {
        // connection.query('INSERT INTO activite_detaille SET date_connexion= ?, id_student = ?, id_contenu = ?, duree= ?', [date_connexion+'', id_student, id_contenu, duree], function (error, results, fields) {
        //     if (error) console.log(error);
        //     callback(results);
        //   });
        connection.query('INSERT INTO activite_detaille SET date_connexion= '+ connection.escape(date_connexion)+', id_student = '+ connection.escape(id_student)+', id_contenu = '+ connection.escape(id_contenu)+', duree= '+ connection.escape(duree), function (error, results) {
            if (error) console.log(error);
            console.log(results);
          });        
    }
    
}

module.exports = StudentActivitiesLog;