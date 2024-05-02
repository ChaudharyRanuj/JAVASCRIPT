

/*      
        PROTOCOL      DOMAIN NAME     RESOURCE    
           V              V              V
BROWSER (https://www.digi-om.com/booking/himalaya-tour) 
******************************************************
   V 1                PROTOCOL       IP        PORT
   V
DNS LOOKUP return this (https://104.27.142.889:443) 
*****************************************************
   V 2
   V
TCP/IP SOCKET CONNECTION ESTABLISHED(TRANSMISSION CONTROL PROTOCOL/INTERNET PROTOCOL) INTERNET PROTOCOL
**************************************************************************************************
   V 3
   V
HTTP REQUEST CAN BE MADE (HYPER TEXT TRANFER PROTOCOL)
*****************************************

HTTP METHOD    REQUEST TARGET   HTTP Version  
   V 4                V           V
   V
  GET/ /booking/himalaya-tour HTTP/1.1

Host: www.google.com         |
User-Agent: Mozilla/5.0      |>>>>>>>> HTTP request headers
Accept-Language: en-US       |

<BODY>                       |>>>>>>>> Request body (only when sending data to server, e.g. POST)
  V 5 
  V

HTTP RESPONSE
**************

HTTP/1.1 200 OK               |--------> HTTP version + status code (ex: 200) + status message (ex: ok)

Date: Fri, 18 Jan 2021        |
Content-Type: text/html       |--------> HTTP response headers (many different possibilities)
Transfer-Encoding: chunked    |
<BODY>                        |--------> RESPONSE BODY (most responses) JASON HTML/CSS
*/