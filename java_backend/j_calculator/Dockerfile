# Используем официальный образ Maven для сборки приложения
FROM maven:3.8.1-openjdk-11 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем pom.xml и скачиваем зависимости
COPY pom.xml .
RUN mvn dependency:go-offline

# Копируем исходный код и собираем проект
COPY src ./src
RUN mvn clean package -DskipTests

# Используем официальный образ OpenJDK для запуска приложения
FROM openjdk:11-jre-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранный JAR файл из предыдущего этапа
COPY --from=build /app/target/calculator-0.0.1-SNAPSHOT.jar app.jar

# Открываем порт 8080 для доступа к приложению
EXPOSE 8080

# Устанавливаем команду для запуска приложения
CMD ["java", "-jar", "app.jar"]
