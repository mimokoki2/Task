using System.Collections.Generic;

namespace SmartSchool_WebAPI.Models
{
    public class Professor
    {
        public Professor() {  }
        public Professor(int id, string nome)
        {
            this.id = id;
            this.nome = nome;
            

        }
        public int id { get; set; }
        public string nome { get; set; }
        public IEnumerable<Disciplina> Disciplinas { get; set; }
    }
}