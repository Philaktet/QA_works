(EffMob) ТестЗадание Часть2 на вакансию [“QA manual тестировщика (Junior)”](https://docs.google.com/document/u/0/d/1Nd_njS7kT9OQEQe2EFTTHL6sCdNDui2ImuoMa3vE-X0/mobilebasic)

# Задание №2

 **Таблица USERS**

****![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXceggi9EjuLBUDE8p0hr41t2Q3s-H4BNgQFVkg7LNgdVW9x-I5bDfyKEzekUWXwBQ9oodexf2JMkUTmSeZBCq8emh3T8F0V8wvDiETNd7A_bBGIOnqmHCmceHYATsmXkSOWcZ-qNw?key=fzcYVLdFXgMf7o04_ITw-A)****

### 1.  _Напиши SQL-запрос для выборки всех активных пользователей старше 25 лет:_  
SELECT \* FROM USERS  
WHERE status = ‘active’ AND age > 25

### 2.  _Как получить количество неактивных пользователей?_  
Нужно запросить через   
COUNT:__SELECT COUNT(\*) FROM USERS  
WHERE status = 'inactive';

### 3.  _Какой запрос покажет имена и email всех пользователей, отсортированных по возрасту по убыванию?_  
SELECT name, email FROM USERS  
ORDER BY age DESC;

### 4. _Как бы ты проверил, что при удалении пользователя данные из связанных таблиц (например, orders) тоже удаляются корректно?_  
Можно проверить так:  
*  Найти пользователя, у которого есть связанные записи в таблице “orders”
* Удалить этого пользователя  
* Проверить, что связанные записи в таблице “orders” тоже удалились:  

1. <ins>Перед удалением:

SELECT COUNT(\*) FROM orders WHERE user\_id = \[id\_пользователя];

2.  <ins>После удаления повторить запрос.

\*При условии что в таблице “orders” есть столбец “ user\_id”

### 5. _Придумай 2 бага, которые можно было бы найти, проверяя данные через SQL:_

1\. Дублирование e-mail-а.  
2\. Некорректный возраст (0 или 120).
