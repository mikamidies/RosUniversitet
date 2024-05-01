<template>
    <div class="wrap">
        <div class="container">
            <h4 class="section__title">
                Дорожная карта
            </h4>

            <div class="board">
                <div class="piece one">
                    Пройди конкурсный отбор
                </div>
                <div class="piece two">
                    Узнай о вариантах финансирования
                </div>
                <div class="piece three">
                    Собери пакет документов
                </div>
                <div class="piece four">
                    Получи приглашение и оформи учебную визу
                </div>


                <div class="year">
                    <p class="name">
                        2016 - yil
                    </p>
                </div>
                <div class="year">
                    <p class="name">
                        2017 - yil
                    </p>
                </div>
                <div class="year">
                    <p class="name">
                        2018 - yil
                    </p>
                </div>
                <div class="year">
                    <p class="name">
                        2019 - yil
                    </p>
                </div>
                <div class="year">
                    <p class="name">
                        2020 - yil
                    </p>
                </div>
                <div class="year">
                    <p class="name">
                        2021 - yil
                    </p>
                </div>
                <div class="year">
                    <p class="name">
                        2022 - yil
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap {
    padding: 80px 0 120px 0;
}

.section__title {
    text-align: center;
    margin-bottom: 40px;
}

.board {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border-left: 1px solid #D7D7DD;
    height: 342px;
    position: relative;
}

.year {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-right: 1px solid #D7D7DD;
}

.name {
    color: var(--grey-40, #9A999B);
    font-family: "Golos Text";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

.piece {
    color: var(--Blue-night, #001935);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    padding: 16px 24px;
    border-radius: 12px;
    background: var(--White, #FFF);
    position: absolute;
    white-space: nowrap;
    min-width: 25%;
}

.one {
    left: 0;
    top: 40px;
}

.two {
    left: 25%;
    top: 94px;
}

.three {
    left: 50%;
    top: 148px;
}

.four {
    left: 72.3%;
    top: 208px;
}
</style>