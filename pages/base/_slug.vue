<template>
    <div class="master">
        <div class="container">
            <h4 class="heading">
                База знаний
            </h4>
            <div class="grid">
                <div class="left">
                    <aside>
                        <Accordion>
                            <AccordionItem>
                                <template slot="accordion-trigger">
                                    <h4>
                                        item 1
                                    </h4>
                                </template>
                                <template slot="accordion-content">
                                    <ul>
                                        <li>
                                            content 1
                                        </li>
                                        <li>
                                            content 1
                                        </li>
                                        <li>
                                            content 1
                                        </li>
                                    </ul>
                                </template>
                            </AccordionItem>

                            <AccordionItem>
                                <template slot="accordion-trigger">
                                    <h4>
                                        item 2
                                    </h4>
                                </template>
                                <template slot="accordion-content">
                                    <ul>
                                        <li>
                                            content 2
                                        </li>
                                        <li>
                                            content 2
                                        </li>
                                        <li>
                                            content 2
                                        </li>
                                    </ul>
                                </template>
                            </AccordionItem>
                        </Accordion>
                    </aside>
                </div>

                <div class="right">
                    <div class="card">
                        <h4 class="par">Информация об университете</h4>

                        <div class="html">
                            <p>
                                Санкт-Петербургский государственный Технологический институт был
                                основан в 1828 году. 6 факультетов, более 68000 выпускников, из
                                которых 110 были избраны академиками и член-корреспондентами РАН и
                                отраслевых академий.
                            </p>

                            <p>
                                Технологический институт был свидетелем первых научных достижений,
                                дал России сотни техников, которые двигают прогресс вперед.
                            </p>
                        </div>

                        <div class="quote">
                            <p>
                                Он отметил, что наркоз в зависимости от периода действует на центральную нервной системы
                                по-разному.
                                Поэтому ученые исследовали влияние динамики наркоза на интенсивность работы обонятельной
                                системы крысы и
                                сделали математическое описание процесса.
                            </p>
                        </div>

                        <div class="img">
                            <img src="@/assets/img/univer.jpg" alt="" />
                        </div>
                    </div>

                    <div class="card">
                        <h4 class="par">Информация об университете</h4>

                        <div class="html">
                            <p>
                                Санкт-Петербургский государственный Технологический институт был
                                основан в 1828 году. 6 факультетов, более 68000 выпускников, из
                                которых 110 были избраны академиками и член-корреспондентами РАН и
                                отраслевых академий.
                            </p>

                            <p>
                                Технологический институт был свидетелем первых научных достижений,
                                дал России сотни техников, которые двигают прогресс вперед.
                            </p>
                        </div>

                        <div class="img">
                            <img src="@/assets/img/univer.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ChevronDown from '~/components/SvgIcons/ChevronDown.vue';

import Accordion from '@/components/Accordion.vue'
import AccordionItem from '@/components/AccordionItem.vue'

export default {
    layout: "inner",

    components: {
        ChevronDown,
        Accordion,
        AccordionItem,
    },

    data() {
        return {
            dropVal: false,
        }
    },
}
</script>

<style scoped>
.master {
    background: var(--Apple-Grey, #F5F5F7);
}

.grid {
    position: relative;
}

aside {
    position: sticky;
    top: 80px;
}

:deep(.chevron svg) {
    width: 24px !important;
    height: 24px !important;
}

aside :deep(h4) {
    color: var(--Blue-night, #001935);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

aside :deep(.accordion__item) {
    padding: 24px 0;
    border-bottom: 1px solid #D7D7DD;
}

aside :deep(.accordion__trigger_active) {
    margin-bottom: 24px;
}

aside :deep(.accordion__content ul) {
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

aside :deep(.accordion__content li) {
    color: var(--Blue-night, #001935);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    list-style: disc;
}

.master {
    padding: 165px 0 120px 0;
}

.grid {
    display: grid;
    grid-template-columns: 216px 1fr;
    gap: 40px;
    margin-top: 80px;
}

.card {
    border-radius: 12px;
    background: var(--White, #fff);
    padding: 64px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.par {
    color: var(--Blue-night, #001935);
    font-family: var(--decor);
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

.html p {
    display: flex;
    margin-bottom: 24px;
    color: var(--grey-64, #5d5d5f);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    /* 25.2px */
}

.html p:last-child {
    margin-bottom: 0;
}

.img img {
    width: 100%;
    height: 665px;
    object-fit: cover;
    border-radius: 4px;
}

.quote {
    color: var(--Black, #020105);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    border-radius: 8px;
    background: var(--Apple-Grey, #F5F5F7);
    padding: 24px;
}
</style>