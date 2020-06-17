#!/usr/bin/env python3

# -*- coding:utf-8 -*-

from setuptools import setup, find_packages

with open('README.md') as fh:
	long_description = fh.read()

setup(
	name = 'test_package',
	version = '1.0',
	description = 'this is test for packing a package.',
	long_description = long_description,
	long_description_content_type = 'text/markdown',
	install_required=[None],
	url='https://github.com/jlli6t/test_pypi',
	author = 'M.M Jie Li',
	author_email = 'mm.jlli6t@gmail.com',
	packages = find_packages(),
	install_required = ['numpy==1.14.4'],
	entry_points={'console_scripts':['test_package=test_package1:info1'],},
	classifiers = (
		"Programming Language :: Python ::3",
		"License :: MIT License",
		"Operationg Sytem :: Linux-based system",),
	)

#packages = ['test_package1', 'test_package1.test_package2'],

