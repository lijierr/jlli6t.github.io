#!/usr/bin/env python3

# -*- coding:utf-8 -*-

from distutils.core import setup

setup(
	name = 'test_package',
	version = '1.0',
	author = 'Jie Li',
	author_email = 'jie.li@uq.edu.au',
	description = 'this is test for packing a package.',
	packages = ['test_package1', 'test_package1.test_package2'],
	)


