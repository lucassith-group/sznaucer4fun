

        function wypisz(){

           var liczba1 = document.getElementById("pole1").value
           var liczba2 = document.getElementById("pole2").value
            var napis = "";
           for(i=liczba1; i<=liczba2; i++)

           {
              

            napis = napis + i + " ";

             

            document.getElementById("wynik").innerHTML = napis;


           }
                      if (liczba1>liczba2) document.getElementById("wynik").innerHTML = "blad";
                    else if (liczba1==liczba2) document.getElementById("wynik").innerHTML = "liczby sa rowne";
                     else document.getElementById("wynik").innerHTML = "to nie jest liczba";


        }

       
   
