load(qttest_p4)
contains(QT_CONFIG,declarative): QT += declarative
SOURCES += tst_qdeclarativeinstruction.cpp
macx:CONFIG -= app_bundle

!symbian: {
    DEFINES += SRCDIR=\\\"$$PWD\\\"
}

CONFIG += parallel_test

QT += core-private gui-private declarative-private
